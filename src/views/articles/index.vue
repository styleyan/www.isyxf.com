<template>
  <article>
    <h1 class="article-title">奇文欣赏</h1>
    <div class="links-content">
      <p class="links-p"></p> 
      <!-- <ul> 
        <li v-for="(item, key) in linkList" :key="key">
          <template v-if="item.classify"><i class="iconfont icon-https"></i></template>
          <a target="_blank" :href="item.websiteUrl">{{item.websiteName}}</a>
        </li> 
      </ul>  -->
    </div>
  </article>  
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
.links {
  &-content{
    .icon-https {
      color #00bb00
    }
    
    li, ul {
      list-style none
    }
  }

  &-p{
    padding-bottom 16px
  }
}
</style>

