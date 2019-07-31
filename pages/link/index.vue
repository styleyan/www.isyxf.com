<template>
    <article>
    <h1 class="article-title">友情链接</h1>
    <div class="links-content">
      <p class="links-p">欢迎交换友链，特别是https站点会加上<i class="iconfont icon-https"></i>小绿锁</p> 
      <ul> 
        <li v-for="(item, key) in linkList" :key="key">
          <template v-if="item.https"><i class="iconfont icon-https"></i></template>
          <a target="_blank" :href="item.websiteUrl">{{item.websiteName}}</a>
        </li> 
      </ul> 
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let result = await $axios({
      url: "/api/link/list"
    });

    return {
      linkList: result.result
    }
  }
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

