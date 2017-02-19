const history = require('connect-history-api-fallback');
module.exports = {
    server:
        { baseDir: 'dist' },
        middleware: [ history() ],
        host: 'localhost',
        logPrefix: 'server',
        port: 9000,
        notify: false,
        tunnel: false
};
