<template>
  <nav class="sidebar sidebar-behavior1">
    <div class="sidebar-profile">
      <nuxt-link to="/"><img :src="avarImg"></nuxt-link> 
      <span>Y. Jer&nbsp;的虚拟笔记</span>
    </div>
    <ul class="sidebar-buttons">
      <li>
        <nuxt-link to="/">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/archive">
          <i class="iconfont icon-archive"></i>
          <span>归档</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/series">
          <i class="iconfont icon-special"></i>
          <span>专题</span>
        </nuxt-link>
      </li>
      <!-- <li>
        <router-link to="/articles">
          <i class="iconfont icon-qiwen"></i>
          <span>奇文</span>
        </router-link>
      </li> -->
      <li>
        <router-link to="/books">
          <i class="iconfont icon-shudan" style="font-size:14px"></i>
          <span>书单</span>
        </router-link>
      </li>
      <li>
        <router-link to="/maxim">
          <i class="iconfont icon-jianyan"></i>
          <span>箴言</span>
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
import avarImg from '@/assets/images/logo-120.png'

export default {
  name: 'sidebar',
  data() {
    return { avarImg }
  },
}
</script>
