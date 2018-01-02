<template>
  <div>
    <loading-bar></loading-bar>
    <sidebar></sidebar>
    <mobile-header></mobile-header>
    <div id="main">
      <div id="page-post">
        <article class="post detail">
          <div class="meta">
            <div class="date">2016-11-14 15:48:53</div>
          </div>
          <h1 class="title">友链</h1>
          <div class="entry-content">
            <article-catalogues></article-catalogues>
            <p>欢迎交换友链，特别是https站点会加上<i class="iconfont icon-https" style="color: #00bb00;"></i>小绿锁</p> 
            <ul> 
              <li><a href="http://blog.xcatliu.com/">Xcat Liu's Blog</a></li> 
              <li><a href="http://geoffzhu.cn/blog/">Geoff的博客</a></li> 
              <li><a href="http://chuangzaoshi.com/friends">创造狮导航</a></li> 
              <li><a href="http://www.cnblogs.com/vajoy/">VaJoy Larn的博客</a></li> 
            </ul> 
          </div>
        </article>
        <div class="comments"><div id="disqus_thread"></div></div>
      </div>
      <my-footer></my-footer>
    </div>
  </div>  
</template>
