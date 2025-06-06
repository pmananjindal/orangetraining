const pino = require('pino');
// Default logger (writes to stdout)
const logger = pino({
    level: 'info', // Options: 'trace', 'debug', 'info', 'warn', 'error', 'fatal'
    transport: {
      target: 'pino-pretty', // for development
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      },
    },
  });

  module.exports = logger;