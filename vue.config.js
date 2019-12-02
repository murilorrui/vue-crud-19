module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://5de2e83381d1f6001478a1ad.mockapi.io/',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
