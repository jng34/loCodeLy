const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    errors: {} || "Something went wrong. Try again later.",
  };

  // Custom Cast error
  if (err.name === "CastError") {
    customError.errors = `No item found with id: ${err.value}`;
    customError.statusCode = 404;
  }

  // Custom validation error
  if (err.name === "ValidationError") {
    Object.values(err.errors)
      .forEach(({ properties }) => customError.errors[properties.path] = properties.message);
    customError.statusCode = 400;
  }

  // Login errors
  if (err.message === 'Invalid email') {
    customError.errors.email = 'Please enter a valid email';
    customError.statusCode = 400;
  }
  if (err.message === 'Invalid password') {
    customError.errors.password = 'Please enter a valid password';
    customError.statusCode = 400;
  }

  return res
    .status(customError.statusCode)
    .json({ 
      errors: customError.errors,
      status: false 
    });
};

module.exports = errorHandlerMiddleware;
