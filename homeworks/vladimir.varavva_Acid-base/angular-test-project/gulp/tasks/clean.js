const del = require('del');
module.exports = path => () => del(path.clean);
