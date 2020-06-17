<template>
  <div @click="show" class="red">组件B</div>
</template>

<script>
  export default {
    methods: {
      show() {
        alert(10)
      }
    }
  }
</script>
<style scoped>
.red {
  color: red;
}
</style>