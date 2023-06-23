const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')


const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send('error')
        // res.redirect('/graphql');
      } else {
        console.log(decodedToken);
        next();
      }
    })
  } else {
    res.send('token doesnt match')
    // res.redirect('/graphql');
  }
} 

// const auth = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     throw new UnauthenticatedError('Authentication invalid');
//   }
//   const token = authHeader.split(' ')[1];
//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = payload;
//     next()
//   } catch (error) {
//     throw new UnauthenticatedError('Authentication invalid.')
//   }
// } 


module.exports = { requireAuth };