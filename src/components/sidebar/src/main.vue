<template>
  <nav id="sidebar" class="behavior_1 sidebar-image" style="background-image:url(https://smallpath.me/static/sidebar.webp);transition:background 2s ease-in-out;">
    <div class="wrap">
      <div class="profile">
        <a href="/"><img src="https://smallpath.me/static/wow.png" alt="Smallpath的小站"></a>
        <span style="color:#fff !important;">Smallpath的小站</span>
      </div>
      <ul class="buttons">
        <li>
          <a href="/" title="首页" class="router-link-active" style="color:#fff !important;">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
          </a>
        </li>
        <li>
          <a href="/archive" title="归档" class="router-link-active" style="color:#fff !important;">
            <i class="iconfont icon-archive"></i>
            <span>归档</span>
          </a>
        </li>
        <li>
          <a href="/about" title="关于" style="color:#fff !important;" class="">
            <i class="iconfont icon-user"></i>
            <span>关于</span>
          </a>
        </li>
        <li>
          <a href="/link" title="友链" style="color:#fff !important;" class="">
            <i class="iconfont icon-link"></i>
            <span>友链</span>
          </a>
        </li>
        <li>
          <a href="/opensource" title="开源" style="color:#fff !important;" class="">
            <i class="iconfont icon-stackoverflow"></i>
            <span>开源</span>
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
