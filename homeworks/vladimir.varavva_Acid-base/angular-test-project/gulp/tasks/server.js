const browserSync = require('browser-sync'),
      config      = require('../../bs-config');

module.exports = () => () => browserSync(config);
