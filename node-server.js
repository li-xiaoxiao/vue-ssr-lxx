const server = require('express')
const vueServerRender = require('vue-server-renderer')
const fs = require('fs')
const path = require('path')
const app = server()
// 拿到打包后的server.bundle结合index.ssr.html，使用bundleRender生成渲成html字符串，返回给浏览器
const serverBundle = require('./dist/vue-ssr-server-bundle.json') // 拿到server.bundle打包后的结果
const template = fs.readFileSync(path.resolve(__dirname, './dist/index.ssr.html'),'utf8')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const render = vueServerRender.createBundleRenderer(serverBundle, {
  template,
  clientManifest
})// 生成渲染函数
app.get('/', (req, res) => {
  // 将html字符串返回给浏览器
  let context = {
    url: req.url
  }
  render.renderToString(context, (err, html) => {
    res.send(html)
  })
})
// 使用静态中间件，当访问‘/’先去dist目录寻找
app.use(server.static(path.resolve(__dirname, 'dist')))
app.get('*', (req, res) => {
  // 如果访问的路径不存在，先到首页，把路由定向到当前请求的路径
  let context = {
    url: req.url
  }
  render.renderToString(context, (err, html) => {
    res.send(html)
  })
})
app.listen(3001)
