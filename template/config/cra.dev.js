const { override, overrideDevServer, watchAll } = require('customize-cra')
const baseConfig = require('./cra.base')

module.exports = {
  webpack: override(baseConfig),
  devWebpack: overrideDevServer(watchAll())
}
