const pino = require('pino');

const logger = pino({
    level: 'info', //options: 'trace', 'debug', 'info', 'warn'
    transport: {
        target: 'pino-pretty', 
        options: {
            colorize : true,
            translateTime : 'SYS:standrad',
            ignore: 'pid,hostname',
        },

    },
});

module.exports = logger;