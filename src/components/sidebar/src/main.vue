<template>
  <nav id="sidebar" class="behavior_1 sidebar-image">
    <div class="wrap">
      <div class="profile">
        <a href="/"><img src="https://avatars3.githubusercontent.com/u/5258790?s=460&v=4"></a>
        <span style="color:#fff !important;">Y. Jer&nbsp;的虚拟笔记</span>
      </div>
      <ul class="buttons">
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
    </div>
  </nav>
</template>
<script>
export default {
  name: 'sidebar',
}
</script>
