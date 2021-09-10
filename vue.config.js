module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 3000,
    https: false,
    hotOnly: true,
    //配置代理服务器
    proxy: {
      //凡是请求以api开头的都会使用下面的代理服务器
      '/api/*': {
        target: 'http://localhost:8899/', // 目标服务器地址
        secure: false,                    // 目标服务器地址是否是安全协议
        changeOrigin: true,               // 是否修改来源, 为true时会让目标服务器以为是webpack-dev-server发出的请求!服务端和服务端的请求是没有跨域的
        //pathRewrite: {'^/api': '/'}     // 将/api开头的请求地址, /api 改为 /, 即 /api/xx 改为 /xx
      }
    }
  },
};