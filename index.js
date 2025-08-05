const logger = require('./startup/logging.js')();
console.log('Logger type:', typeof logger);
const winston = require('winston');
const express = require('express');
const { transform } = require('lodash');
const app = express();

require('./startup/routes.js')(app);
require('./startup/db.js')();
require('./startup/config.js')();
require('./startup/validation.js')();
require('./startup/prod')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port,()=>logger.info(`Listning on port ${port}...`),
console.log((`Listning on port ${port}...`)));

module.exports = server;

