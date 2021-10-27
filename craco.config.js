// 根路径 -> craco.config.js
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@service': resolve('src/service'),
      '@static': resolve("src/static"),
      "@pages": resolve("src/pages"),
      "@assets": resolve("src/assets"),
      "@utils": resolve("src/utils"),
    }
  }
}
