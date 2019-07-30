<template>
    <article>
    <h1 class="article-title">友情链接</h1>
    <div class="links-content">
      <p class="links-p">欢迎交换友链，特别是https站点会加上<i class="iconfont icon-https"></i>小绿锁</p> 
      <ul> 
        <li v-for="(item, key) in linkList" :key="key">
          <template v-if="item.classify"><i class="iconfont icon-https"></i></template>
          <a target="_blank" :href="item.websiteUrl">{{item.websiteName}}</a>
        </li> 
      </ul> 
    </div>
  </article>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        return {
            linkList: [
                {
                    "_id": "5cf28e379b4650000e076aa9",
                    "classify": 1,
                    "desc": "前端博客",
                    "websiteName": "雨夜带刀",
                    "websiteUrl": "https://blog.yiguochen.com/",
                    "uuid": "8hgzeqmxc1b",
                    "createTime": "2019-06-01 14:39:51",
                    "__v": 0
                },
                {
                    "_id": "5ce95e929b4650000e076aa7",
                    "classify": 1,
                    "desc": " 阿里中间件团队博客",
                    "websiteName": " 阿里中间件团队博客",
                    "websiteUrl": "http://jm.taobao.org/",
                    "uuid": "mq191ay9jn8",
                    "createTime": "2019-05-25 15:26:10",
                    "__v": 0
                }
            ]
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

