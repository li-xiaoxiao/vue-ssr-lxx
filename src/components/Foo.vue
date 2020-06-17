<template>
  <div>
    组件A
    {{$store.state.name}}
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'foo',
    },
    asyncData({store}) {
      return store.dispatch('set_name')
    },
    created() {
      this.$store.dispatch('set_name')
    }
  }
</script>