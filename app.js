// Module and npm package calls
require('dotenv').config();
require('express-async-errors');
const express = require('express'); // Express framework
const app = express(); // Initialize express
const connectDB = require('./db/connect'); //Connect to DB
const cors = require('cors')
// GraphQL
const { graphqlHTTP } = require('express-graphql')
const gqlSchema = require('./graphQL/graphQLSchema');
// Routers
const userRouter = require('./routes/user');
const zipRouter = require('./routes/zip');
const cafeRouter = require('./routes/cafe');
// Middleware calls
const errorHandlerMiddleware = require('./middleware/error-handling');
const notFoundMiddleWare = require("./middleware/not-found");


// Allows req.body to be captured
app.use(express.json());

// Allow for cross-origin requests on APIs
app.use(cors());

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
app.use('/api/v1/zips', zipRouter);
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
