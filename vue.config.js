module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        styles: '/Users/roy/Documents/webspace/travel-vue/src/assets/styles',
        common: '/Users/roy/Documents/webspace/travel-vue/src/common'
      }
    }
  }
}
