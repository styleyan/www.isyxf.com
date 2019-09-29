<template>
  <div>
    <div v-for="(articles, index) in list" :key="index" class="row-container-wrapper">
      <article
        class="article-index"
        v-for="(item, key) in articles"
        :key="key">
        <div class="article-col">
          <h2 class="article-title">
            <nuxt-link :to="{path:`/articles/${item.url}`}">{{item.title}}</nuxt-link>
          </h2>
          <div class="infos">
            <i class="iconfont icon-date"></i>
            <time class="create-timer">{{item.gmtCreate}}</time>
          </div>
          <div class="brief">
            <div class="brief-content" v-html="item.brief"></div>
            <nuxt-link class="btn-primary" :to="{path:`/articles/${item.url}`}">阅读更多</nuxt-link>
          </div>
          <div class="article-tags">
            <i class="iconfont icon-tag"></i>&nbsp;
            <span v-for="(tag, key) in item.tags.split(',')" :key="key">
              <nuxt-link to="/">{{tag}}</nuxt-link>{{ key === (item.tags.split(',').length - 1) ? "" : "，"}}
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: 'article-list',
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>
<style lang="stylus">
.row-container-wrapper{
  overflow auto
  margin-bottom 30px
  display flex
}
.article-index{
  padding 20px 66px 20px 0
  min-height 1px
  overflow auto
  flex 1
  max-width 50%

  .article-col{
    border-bottom 1px dotted #eee;
    padding-bottom: 3px;
  }
  .create-timer, .article-tags{
      font-size 12px
      color #757575
  }

  .article-tags{
    a{
      text-decoration underline
      text-underline-position under
      color #757575
    }
  }

  .infos{
    margin-bottom 6px
  }
  .iconfont{
      color #757575
  }
  .brief{
    font-size 15px
    padding-bottom 16px
  }
  .brief-content{
    display inline
    * {
      display inline
    }
  }
}
</style>
