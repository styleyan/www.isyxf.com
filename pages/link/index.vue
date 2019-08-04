<template>
  <article class="links-pages">
    <page-title title="友情链接"></page-title>
    <p class="desc">欢迎交换友链，特别是https站点会加上<i class="iconfont icon-https"></i>小绿锁</p> 
    <ul class="list"> 
      <li v-for="(item, key) in linkList" :key="key">
        <i v-if="item.https" class="iconfont icon-https"></i>
        <a target="_blank" :href="item.websiteUrl">{{item.websiteName}}</a>
      </li> 
    </ul> 
  </article>
</template>

<script>
import PageTitle from '~/components/PageTitle'

export default {
  components: { PageTitle },
  async asyncData({ $axios }) {
    let data = await $axios({
      url: "/api/link/list"
    });

    return {
      linkList: data.result
    }
  }
}
</script>
<style lang="stylus">
.links-pages {
  .icon-https {
    color #00bb00
  }

  .list{
    a{
      color #333

      &:hover{
        text-decoration underline
      }
    }
  }

  .desc{
    padding-bottom 16px
    font-size 15px

    .icon-https{
      margin 0 3px  
    }
  }
}
</style>

