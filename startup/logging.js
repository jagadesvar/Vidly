const winston = require('winston');

module.exports = function(){

    winston.configure({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports:[
        new winston.transports.File({filename: 'logfile.log'})
    ],
    exceptionHandlers:[
        new winston.transports.File({filename: 'exceptions.log'})
    ],
    rejectionHandlers:[
        new winston.transports.File({filename: 'rejections.log'})
    ],

});


return winston;
}
