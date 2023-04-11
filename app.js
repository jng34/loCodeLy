const express = require('express');
const app = express();
const zipCodeGraph = require('./zipCodeGraph')

app.get('/', (req, res) => {
  res.status(200).json(zipCodeGraph)
})

app.get('/zipcodes', (req, res) => {
  res.status(200).json(Object.keys(zipCodeGraph))
})

app.get('*', (req, res) => {
  res.status(404).send('Not found')
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})