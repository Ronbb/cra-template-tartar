const {
  override,
  overrideDevServer,
  fixBabelImports,
  useBabelRc,
  useEslintRc,
  addLessLoader,
  watchAll,
  addBundleVisualizer
} = require('customize-cra')
const path = require('path')

module.exports = {
  webpack: override(
    useBabelRc(),
    useEslintRc(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#37a6fd' }
    }),
    addBundleVisualizer({
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, 'out/report.html')
    })
  ),
  devServer: overrideDevServer(watchAll())
}
