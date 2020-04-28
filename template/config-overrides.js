const { isProduction } = require('./config/util')

module.exports = isProduction ? require('./config/cra.prod') : require('./config/cra.dev')
