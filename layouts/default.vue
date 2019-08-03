<template>
  <div class="ddddd">
    <sidebar></sidebar>
    <mobile-header></mobile-header>
    <div id="main" class="wrap-main">
      <nuxt />
    </div>
    <!-- <my-footer></my-footer> -->
  </div>
</template>

<script>
import MyFooter from '~/components/footer'
import MobileHeader from '~/components/mobile-header'
import Sidebar from '~/components/sidebar'

export default {
  components: {
    MyFooter,
    MobileHeader,
    Sidebar
  }
}
</script>


<style lang="stylus">
@import "~assets/stylus/index.styl"
</style>
