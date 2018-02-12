<template>
  <div id="app" class="container">
    <sidebar></sidebar>
    <mobile-header></mobile-header>
    <div id="main" class="wrap-main">
      <router-view :pg="pg"></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    pg() {
      return Number.parseInt(this.$route.query.pg) || 1
    },
  },
}
</script>
