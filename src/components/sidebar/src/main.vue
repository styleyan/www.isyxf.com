<template>
  <nav class="sidebar sidebar-behavior1">
    <div class="sidebar-profile">
      <a href="/"><img :src="avarImg"></a>
      <span>Y. Jer&nbsp;的虚拟笔记</span>
    </div>
    <ul class="sidebar-buttons">
      <li>
        <router-link to="/">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/archive">
          <i class="iconfont icon-archive"></i>
          <span>归档</span>
        </router-link>
      </li>
      <li>
        <router-link to="/series">
          <i class="iconfont icon-special"></i>
          <span>专题</span>
        </router-link>
      </li>
      <li>
        <router-link to="/articles">
          <i class="iconfont icon-special"></i>
          <span>奇文</span>
        </router-link>
      </li>
      <li>
        <router-link to="/link">
          <i class="iconfont icon-link"></i>
          <span>友链</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import avarImg from '@/assets/images/avar.jpg'

export default {
  name: 'sidebar',
  data() {
    return { avarImg }
  },
}
</script>
