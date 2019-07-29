<template>
  <div>
    <div class="header">
      <div class="header-bar"><i></i></div>
      <h1 class="header-h1">
        <a href="/">Y. Jer&nbsp;的虚拟笔记</a>
      </h1>
      <a href="/" class="header-cover">
        <img class="header-img" :src="avarImg">
      </a>
    </div>
    <div class="sidebar-mask"></div>
  </div>
</template>
<script>
import avarImg from '~/assets/images/avar.jpg'

export default {
  name: 'mobile-header',
  data() {
    return { avarImg }
  },
}
</script>
