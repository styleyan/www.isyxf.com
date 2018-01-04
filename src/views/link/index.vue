<template>
  <div id="page-post">
    <article class="post detail">
      <h1 class="title">友情链接</h1>
      <div class="entry-content">
        <p>欢迎交换友链，特别是https站点会加上<i class="iconfont icon-https" style="color: #00bb00;"></i>小绿锁</p> 
        <ul> 
          <li v-for="(item, key) in linkList" :key="key"><a :href="item.url">{{item.name}}</a></li> 
        </ul> 
      </div>
    </article>
    <div class="comments"><div id="disqus_thread"></div></div>
  </div>  
</template>
<script>
export default {
  name: '',
  data() {
    return {
      linkList: [
        { url: 'http://blog.xcatliu.com/', name: 'Xcat Lius Blog' },
        { url: 'http://geoffzhu.cn/blog/', name: 'Geoff的博客' },
        { url: 'http://chuangzaoshi.com/friends', name: '创造狮导航' },
        { url: 'http://www.cnblogs.com/vajoy/', name: 'VaJoy Larn的博客' },
      ],
    }
  },
}
</script>

