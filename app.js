// Module and npm package calls
require('dotenv').config();
require('express-async-errors');
const express = require('express'); // Express framework
const app = express(); // Initialize express
const connectDB = require('./db/connect'); //Connect to DB
// Security packages
const helmet = require('helmet');
const cors = require('cors');
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
const authenticateUser = require('./middleware/authentication');
const errorHandlerMiddleware = require('./middleware/error-handling');
const notFoundMiddleWare = require("./middleware/not-found");

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100,
  })
);
app.use(express.json()); // Allows req.body to be captured
app.use(
  helmet({
    // Allow graphiql access
    contentSecurityPolicy:
      process.env.NODE_ENV === "production" ? undefined : false,
  })
);
app.use(cors()); // Allow for cross-origin requests on APIs
app.use(xss());

// Enable GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: gqlSchema,
    graphiql: true,
  })
);

// Routes
app.use("/api/v1/users", userRouter);
app.use('/api/v1/zips', authenticateUser, zipRouter);
app.use('/api/v1/cafes', cafeRouter);


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
