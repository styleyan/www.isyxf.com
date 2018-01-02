<template>
  <div id="app" class="container">
    <loading-bar></loading-bar>
    <sidebar></sidebar>
    <mobile-header></mobile-header>
    <div id="main">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
