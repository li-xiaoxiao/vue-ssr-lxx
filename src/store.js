import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({ // 创建一个实例函数
    state: {
      name: 'xx'
    },
    mutations: {
      set_name(state) {
        state.name = 'l'
      }
    },
    actions: {
      set_name({commit}) {
        return new Promise((reslove, reject) => {
          setTimeout(() => {
            commit('set_name')
            reslove()
          }, 1000)
        })
      }
    }
  })
  // store对象在服务端和浏览器端都会被访问，因此我们需要当改变服务端的时候，同步浏览器端
  if(typeof window !== 'undefined' && window.__INITIAL_STAT) {
    store.state = window.__INITIAL_STAT
  }
  return store
}