<template>
  <div id="page-post">
    <article class="post detail">
      <h1 class="title">友情链接</h1>
      <div class="entry-content">
        <p>欢迎交换友链，特别是https站点会加上<i class="iconfont icon-https"></i>小绿锁</p> 
        <ul> 
          <li v-for="(item, key) in linkList" :key="key">
            <template v-if="item.classify"><i class="iconfont icon-https"></i></template>
            <a target="_blank" :href="item.websiteUrl">{{item.websiteName}}</a>
          </li> 
        </ul> 
      </div>
    </article>
  </div>  
</template>
<script>
export default {
  name: '',
  data() {
    return {
      linkList: [],
    }
  },
  created() {
    this.getLinks()
  },
  methods: {
    /**
     * 获取友情链接数据
     */
    getLinks() {
      this.$ajax.blogLinks().then((data) => {
        this.linkList = data.list
      })
    },
  },
}
</script>
<style lang="stylus">
.entry-content {
  .icon-https {
    color: #00bb00
  }
}
</style>

