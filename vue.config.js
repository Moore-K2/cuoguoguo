const path = require("path");

function resolve(dir) {
    // __dirname当前位置的绝对路径
    return path.join(__dirname, dir);
}


module.exports = {
    lintOnSave: process.env.NODE_ENV === "development",
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src"),
                "@i": resolve("src/api"),
                "@c": resolve("src/components"),
                "@v": resolve("src/views"),
                "@a": resolve("src/assets"),
                "@u": resolve("src/utils")
            }
        }
    },
    // 配置代理服务器，解决跨域问题
    devServer: {
        proxy: {
            '/moore': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/moore': '' },
                ws: true,
                changeOrigin: true
            },
            '/api': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/api': '' },
                ws: true,
                changeOrigin: true
            },
        }
    }
};