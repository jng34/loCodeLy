// Module and npm package calls
const express = require('express');
const app = express();
const zipCodeGraph = require('./graphs/zipCodeGraph');
const connectDB = require('./db/connect'); // connect to DB
const userRouter = require('./routes/user');
const zipRouter = require('./routes/zip');
// const yelpSearch = require('./yelp_fusion/yelp');
require('dotenv').config();
require('express-async-errors');


// Test Yelp Fusion API call //
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.YELP_API);

const yelpSearch = async (req, res) => {
  const search = await client.search({
    term: "cafe",
    location: "new york, ny 10002",
    attributes: "wifi_free"
  });
  res.status(200).json(search.jsonBody);
};

app.get('/yelp', yelpSearch)
//////////////

// Middleware calls
const errorHandlerMiddleware = require('./middleware/error-handling');
const notFoundMiddleWare = require("./middleware/not-found");

// Allows req.body to be captured
app.use(express.json());

// Routes
app.use("/api/v1/user", userRouter);
app.use('/api/v1/zips', zipRouter);
  

// Middleware
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);


// const port = 3000;
const port = process.env.PORT || 3000;

// Connect to DB and start server 
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('Server is running on port 3000')
    })
  } catch (error) {
    console.log(error)
  }
}

startServer();
