<template>
  <div class="left-col">
    <header class="inner" id="header">
      <div class="profilepic">
        <a href="/"></a>
      </div>
      <h1>
        <a href="/"> 我的测试文字</a>
      </h1>
      <p class="subtitle">专注 WEB 端开发</p>
      <nav id="main-nav">
        <ul>
          <li><a href="/"><span>首页</span></a></li>
          <li><a href="/post/series.html"><span>专题</span></a></li>
          <li><a href="/post/archives.html"><span>归档</span></a></li>
          <li><a href="/post/blogroll.html"><span>友链</span></a></li>
          <li class="on"><a href="/post/about.html"><span>关于</span></a></li>
        </ul>
      </nav>
      <nav id="sub-nav">
        <div class="social">
          <a class="twitter external" rel="nofollow" href="//twitter.com/qgy18" title="Twitter" aria-label="Twitter">Twitter</a>
          <a class="rss" href="https://imququ.com/rss.html" title="RSS 订阅" aria-label="RSS 订阅">RSS</a>
          <a class="search" href="/search.html" title="站内搜索" aria-label="站内搜索">Search</a>
        </div>
      </nav>
    </header>
  </div>
</template> 
<script>
  export default {
    name: 'nav',
  }
</script>
<style lang="stylus">
  .left-col{
    background-color: #007b8b;
    background-image: url(https://st.imququ.com/static/img/blog/left-bg2.jpg);
    background-size: cover;
    height: 100%;
    position: fixed;
    width: 270px;
  }
  #header {
    border-bottom: none;
    height: auto;
    line-height: 30px;
    margin-left: 50px;
    padding: 30px 0;
    width: 100%;
    h1 {
      float: none;
      font-weight: 300;
      font-size: 30px;
    }
    a {
      color: #fff;
      text-shadow: 0 1px #666;
      transition: color .3s;
    }
    .profilepic {
      a {
        background-image:url("http://static.5755.com/image/public/logo.png");
        background-size: 100% 100%;
        border-radius: 50%;
        display: block;
        height: 160px;
        margin: 15px 0 20px -10px;
        width: 160px;
      }
    }
    .subtitle{
      color: #fff;
    }
  }

  #main-nav, #sub-nav {
    float: none;
    margin-top: 15px;
  }
  #main-nav {
    margin-left: 0;
    li {
      display: block;
      margin-left: 0;
      position: relative;
    }
  }
  #sub-nav {
    .social {
      margin-bottom: 10px;
    }
    .twitter {
      background-color: #55cff8;
      border: 1px solid #55CFF8;
    }
  }
</style>