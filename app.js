// Module and npm package calls
const express = require('express');
const app = express();
const zipCodeGraph = require('./graphs/zipCodeGraph');
const connectDB = require('./db/connect'); // connect to DB
const zipRouter = require('./routes/zip');
require('dotenv').config();
require('express-async-errors');

// Middleware calls
const errorHandlerMiddleware = require('./middleware/error-handling');
const notFoundMiddleWare = require("./middleware/not-found");

// Routes
app.use('/api/v1/zips', zipRouter)

app.get('/', (req, res) => {
  res.status(200).json(zipCodeGraph)
})

app.get('/zipcodes', (req, res) => {
  res.status(200).json(Object.keys(zipCodeGraph))
})

app.get('*', (req, res) => {
  res.status(404).send('Not found')
})

// Middleware
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
    console.log(error)
  }
}

startServer();
