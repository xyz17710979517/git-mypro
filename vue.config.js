module.exports = {
    devServer: {
        open: true,//自动打开浏览器
        proxy: {
            '/api': {
                target: 'http://ceshi5.dishait.cn/admin', // 要访问的跨域的域名
                ws: true, // 如果要代理websockets
                changeOrigin: true, // 开启代理
                pathRewrite: { // 路径重写
                    '^/api': '' // 使用 `/api` 代替 `target` 要访问的跨域的域名
                }
            }
        }
    }
}