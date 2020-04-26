const {
  override,
  overrideDevServer,
  fixBabelImports,
  useBabelRc,
  useEslintRc,
  addLessLoader,
  watchAll,
  addBundleVisualizer,
  addWebpackPlugin
} = require('customize-cra')
const path = require('path')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

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
    addBundleVisualizer(
      {
        analyzerMode: 'static',
        reportFilename: path.resolve(__dirname, 'out/report.html')
      },
      true
    ),
    addWebpackPlugin(
      new AntdDayjsWebpackPlugin({
        replaceMoment: true
      })
    )
  ),
  devServer: overrideDevServer(watchAll())
}
