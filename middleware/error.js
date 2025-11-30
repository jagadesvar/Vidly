const winston = require('winston');

module.exports = function (err, req, res, next) {
  winston.error(err.message, err);
  res.status(500).send(err.message);   // show the real error for debugging
};