<template>
  <div id="app" class="container">
    <loading-bar></loading-bar>
    <sidebar></sidebar>
    <mobile-header></mobile-header>
    <div id="main" class="wrap-main">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    // this.$ajax.blogList().then(() => {
    //   console.log('ddddd')
    // })
  },
}
</script>
