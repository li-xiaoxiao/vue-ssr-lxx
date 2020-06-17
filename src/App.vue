
<template>
  <div id="root">
    <router-link to="/">bar</router-link>
    <router-link to="/foo">foo</router-link>
    <router-view></router-view>
    hello
  </div>
</template>


<script>
  import Bar from './components/Bar.vue'
  import Foo from './components/Foo.vue'
  export default {
    metaInfo: {
      title: 'myApp',
    },
    components: {
      Bar,
      Foo
    },
    data() {
      return {

      }
    }
  }
</script>