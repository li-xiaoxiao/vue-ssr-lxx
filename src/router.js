import Vue from 'vue'
import VueRouter from 'vue-router'
import Bar from './components/Bar.vue'
import VueMeta from 'vue-meta'
Vue.use(VueRouter)
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

export default () => {
  const router = new VueRouter({ // 创建一个实例函数
    mode: 'history',
    routes: [{
      path: '/',
      component: Bar
    }, {
      path: '/foo',
      component: () => import('./components/Foo.vue')
    }]
  })
  return router
}
