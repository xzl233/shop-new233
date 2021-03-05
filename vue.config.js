module.exports = {
  outputDir: 'dist',
  assetsDir:'static',
  publicPath:'./',
  // publicPath:'http://www.xzl233.cn',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("autoprefixer")({
            // 配置使用 autoprefixer
            overrideBrowserslist: ["last 15 versions"] 
          }),
          require("postcss-pxtorem")({
            rootValue: 37.5, // 换算的基数
            propList: ["*"],
          //exclude: /node_modules/  //配置无需转换
          })
        ]
      }
    }
  }
};