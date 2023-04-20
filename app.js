// Module and npm package calls
const express = require('express');
const app = express();
const zipCodeGraph = require('./graphs/zipCodeGraph');
const connectDB = require('./db/connect'); // connect to DB
const userRouter = require('./routes/user');
const zipRouter = require('./routes/zip');
require('dotenv').config();
require('express-async-errors');

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API)


// Test Yelp Fusion API call
app.get('/', async (req,res) => {
  const search = await client.search({
      term: "Four Barrel Coffee",
      location: "san francisco, ca",
    })
  res.status(200).json(search.jsonBody);
    
  // client
  //   .search({
  //     term: "Four Barrel Coffee",
  //     location: "san francisco, ca",
  //   })
  //   .then((response) => {
  //     // console.log(response.jsonBody);
  //     res.status(200).json(response.jsonBody)
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

})

// Middleware calls
const errorHandlerMiddleware = require('./middleware/error-handling');
const notFoundMiddleWare = require("./middleware/not-found");

// Allows req.body to be captured
app.use(express.json());

// Routes
app.use("/api/v1/user", userRouter);
app.use('/api/v1/zips', zipRouter);



// app.get('/api/v1/yelp', (req, res) => {
//   res.status(200).json(zipCodeGraph)
// })

// app.get('/zipcodes', (req, res) => {
//   res.status(200).json(Object.keys(zipCodeGraph))
// })

// app.get('*', (req, res) => {
//   res.status(404).send('Not found')
// })

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
