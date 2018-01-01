<template>
  <div><nav id="sidebar" class="behavior_1 sidebar-image" style="background-image:url(https://smallpath.me/static/sidebar.webp);transition:background 2s ease-in-out;;"><div class="wrap"><div class="profile"><a href="/"><img src="https://smallpath.me/static/wow.png" alt="Smallpath的小站"></a><span style="color:#fff !important;">Smallpath的小站</span></div><ul class="buttons"><li><a href="/" title="首页" class="router-link-active" style="color:#fff !important;"><i class="iconfont icon-home"></i><span>首页</span></a></li><li><a href="/archive" title="归档" style="color:#fff !important;" class=""><i class="iconfont icon-archive"></i><span>归档</span></a></li><li><a href="/tag" title="标签" style="color:#fff !important;" class=""><i class="iconfont icon-tags"></i><span>标签</span></a></li><li><a href="/about" title="关于" style="color:#fff !important;" class=""><i class="iconfont icon-user"></i><span>关于</span></a></li><li><a href="/link" title="友链" style="color:#fff !important;" class=""><i class="iconfont icon-link"></i><span>友链</span></a></li><li><a href="/opensource" title="开源" style="color:#fff !important;" class=""><i class="iconfont icon-stackoverflow"></i><span>开源</span></a></li></ul></div></nav><div><div id="header" style="background-image:url(https://smallpath.me/static/sidebar.webp);"><div class="btn-bar"><i></i></div><h1><a href="/" style="color:#fff !important;">Smallpath的小站</a></h1><a href="/about" class="me"><img src="https://smallpath.me/static/wow.png" alt="Smallpath的小站"></a></div><div id="sidebar-mask"></div></div><div id="main"><section id="page-index"><article class="post"><div class="meta"><div class="date">2017-09-12 11:33:21</div></div><h1 class="title"><a href="/post/react-native-async" class="">React Native的异步</a></h1><div class="entry-content"><div><p>RN的JSBridge是一个完成度相当高的东西。它带来了开发速度的巨大提升，相应地也导致了运行原生代码时总是异步的这一特征，本文讨论一下RN中异步的一些场景和异步带来的一些问题。</p>
</div><a href="/post/react-native-async" class="">阅读更多 »</a></div></article><nav class="pagination"><!----><a href="/?page=2" class="next">下一页 »</a><div class="center"><a href="/archive" class="">博客归档</a></div></nav></section><footer id="footer" class="inner">
  © 2016&nbsp;-&nbsp; Smallpath的小站 &nbsp;-&nbsp;
  <a target="_blank" href="https://github.com/smallpath/blog">博客源码</a><br> Powered by&nbsp;
  <a target="_blank" href="https://github.com/vuejs/vue">Vue2</a>
  &nbsp;&amp;&nbsp;
  <a target="_blank" href="https://github.com/koajs/koa">Koa2</a></footer></div></div>
</template>

<script>
export default {
  name: 'index-page',
}
</script>

