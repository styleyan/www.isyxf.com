<template>
  <div class="ddddd">
    <sidebar></sidebar>
    <canvas id="evanyou"></canvas>
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
import { changeBg } from './changeBg'

export default {
  components: {
    MyFooter,
    MobileHeader,
    Sidebar
  },
  mounted() {
    changeBg()
    document.body.onclick = changeBg
  },
}
</script>


<style lang="stylus">
@import "~assets/stylus/index.styl"

#evanyou {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -10;
}
</style>
