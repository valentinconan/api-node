import log4js from 'log4js'

export default class Logger {
    static getLogger(filePath) {
        return log4js.getLogger(filePath);
    }
}

log4js.configure({
    appenders: {
        everything: {
            type: 'dateFile',
            filename: '.logs/default.log',
            pattern: 'yyyy-MM-dd',
            compress: true
        },
        out: {
            type: 'stdout'

        }
    },
    categories: {
        default: {
            appenders: ['everything', 'out'],
            level: process.env['LOG_LEVEL'] ? process.env['LOG_LEVEL'] : 'info'
        }
    }
});