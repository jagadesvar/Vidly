const mongoose = require('mongoose');
const loggers = require('./logging');
const config = require('config');
const logger = loggers();

module.exports = function(){
    const db = config.get('db');
    mongoose.connect(db)
        .then(()=> logger.info(`Connected to ${db}...`),
    console.log(`Connected to ${db}...`));
}
