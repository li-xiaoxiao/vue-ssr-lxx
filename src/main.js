import Vue from 'vue'
import App from './App.vue'
import createRouter from './router.js'
import createStore from './store.js'


export default () => {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({ // 创建一个实例函数
    router,
    store,
    render: h => { 
      return h(App)
    }
  })
  return { app, router, store }
}
