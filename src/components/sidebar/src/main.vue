<template>
  <nav id="sidebar" class="behavior_1 sidebar-image" style="background-image:url(https://st.imququ.com/static/img/blog/left-bg2.jpg);transition:background 2s ease-in-out;background-size: cover;">
    <div class="wrap">
      <div class="profile">
        <a href="/"><img src="https://avatars3.githubusercontent.com/u/5258790?s=460&v=4"></a>
        <span style="color:#fff !important;">Y. Jer&nbsp;的虚拟笔记</span>
      </div>
      <ul class="buttons">
        <li>
          <a href="/" class="router-link-active" style="color:#fff !important;">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
          </a>
        </li>
        <li>
          <a href="/archive" class="router-link-active" style="color:#fff !important;">
            <i class="iconfont icon-archive"></i>
            <span>归档</span>
          </a>
        </li>
        <li>
          <a href="/series" class="router-link-active" style="color:#fff !important;">
            <i class="iconfont icon-archive"></i>
            <span>专题</span>
          </a>
        </li>
        <li>
          <a href="/link" style="color:#fff !important;" class="">
            <i class="iconfont icon-link"></i>
            <span>友链</span>
          </a>
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
