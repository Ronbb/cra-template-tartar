const { override, addBundleVisualizer, disableChunk, adjustStyleLoaders } = require('customize-cra')
const path = require('path')
const baseConfig = require('./cra.base')
const { isBuildingControl } = require('./util')

const webpackPluginBlackList = ['ManifestPlugin', 'GenerateSW']

const adjustWebpackOutput = output => config => {
  Object.assign(config.output, output)
  return config
}

const enableWebpackPluginBlackList = () => config => {
  config.plugins = config.plugins.filter(
    plugin => !webpackPluginBlackList.some(name => plugin.constructor.name === name)
  )
  return config
}

module.exports = override(
  baseConfig,
  addBundleVisualizer(
    {
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, 'out/report.html')
    },
    true
  ),
  isBuildingControl && disableChunk(),
  isBuildingControl &&
    adjustWebpackOutput({
      filename: 'index.js',
      libraryTarget: 'umd',
      library: process.env.npm_package_name
    }),
  isBuildingControl &&
    adjustStyleLoaders(loaders => {
      loaders.use = loaders.use.filter(loader => !/mini-css-extract-plugin/.test(loader.loader))
    }),
  isBuildingControl && enableWebpackPluginBlackList()
)
