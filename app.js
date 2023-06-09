// Module and npm package calls
require('dotenv').config();
require('express-async-errors');
const express = require('express'); // Express framework
const app = express(); // Initialize express
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/connect'); //Connect to DB
// Security packages
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
// GraphQL
const { graphqlHTTP } = require('express-graphql')
const gqlSchema = require('./graphQL/schema');
// Routers
const userRouter = require('./routes/user');
const zipRouter = require('./routes/zip');
const cafeRouter = require('./routes/cafe');
// Middleware calls
const { requireAuth } = require('./middleware/authentication');
const errorHandlerMiddleware = require('./middleware/error-handling');
const notFoundMiddleWare = require("./middleware/not-found");

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100,
  })
  );
const corsOptions = {
  origin: "http://localhost:19006",
  credentials: true,
};
  
app.use(cors(corsOptions)); // Allow for cross-origin requests on APIs
app.use(express.json()); // Allows req.body to be captured
app.use(cookieParser()); 
app.use(
  helmet({
      // Allow graphiql access
      contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false,
  })
);
app.use(xss());

// Enable GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: gqlSchema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/zips', requireAuth, zipRouter);
app.use('/api/v1/cafes', requireAuth, cafeRouter);


// Middleware functions
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;
// Connect to DB and start server 
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to MongoDB...')
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`)
    })
  } catch (error) {
    console.log('Failed to connect to db :(', error)
  }
}

startServer();
