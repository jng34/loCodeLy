// Module and npm package calls
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect'); // connect to DB
const userRouter = require('./routes/user');
const zipRouter = require('./routes/zip');
const cafeRouter = require('./routes/cafe');
// Middleware calls
const errorHandlerMiddleware = require('./middleware/error-handling');
const notFoundMiddleWare = require("./middleware/not-found");


// Test Yelp Fusion API call //
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.YELP_API);


const businessSearch = async (req, res) => {
  const data = await client.search({
    term: "good_for_working",
    location: "10002",
    attributes: "cafes",
    limit: 10
  });
  res.status(200).json(data.jsonBody);
  // const data = await client.search({
  //   term: "good for working",
  //   location: "10002",
  //   attributes: "cafes",
  //   limit: 10
  // });
  // res.status(200).json(data.jsonBody);
};


app.get("/yelp", businessSearch);
//////////////


// Allows req.body to be captured
app.use(express.json());

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
    app.listen(port, () => {
      console.log('Server is running on port 3000')
    })
  } catch (error) {
    console.log('Failed to connect to db :(')
  }
}

startServer();
