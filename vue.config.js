module.exports = {
  devServer: {
    port: 8080
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete('eslint')
  },
  transpileDependencies: [
    'vuetify'
  ]
}
