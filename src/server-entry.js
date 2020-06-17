// 服务器端入口
import createApp from './main'
// 服务端没有挂载，因此返回一个函数,服务端每次调用都产生一个新的app实例
export default (context) => {
  // 服务器端，返回的永远都是index.html,但路由需要跳转到指定路径上，匹配到对应的组件
  
  return new Promise((reslove, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)

    router.onReady(() => {
      // 有异步加载组件，因此需要等组件加载完成再返回，否则返回一个空页面。
      const components = router.getMatchedComponents()
      Promise.all(components.map(component => {
        // 拿到他的asyncData属性，只在服务器端执行
        if (component.asyncData) {
          return component.asyncData({store}) // 返回一个promise
        }
      })).then(() => {
        context.state = store.state // 会自动在window上挂载一个属性
        context.meta = app.$meta()
        reslove(app)
      })
    })
  })
}