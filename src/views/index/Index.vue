<template>
  <div>
    <my-nav></my-nav>
    <my-mid></my-mid>
  </div>
</template>

<script>
import myNav from './components/nav.vue'
import myMid from './components/mid.vue'

export default {
  name: 'Index',
  components: { myNav, myMid },
}
</script>
<style lang="stylus" scoped>
  .hello .el-input{ 
    width: auto
  }
</style>

