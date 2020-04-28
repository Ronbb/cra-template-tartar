const {
  override,
  fixBabelImports,
  useBabelRc,
  useEslintRc,
  addLessLoader,
  addWebpackPlugin
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const theme = require('./theme')

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  }),
  addWebpackPlugin(
    new AntdDayjsWebpackPlugin({
      replaceMoment: true
    })
  )
)
