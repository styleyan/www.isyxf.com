<template>
    <div class="articles-detail">
        <h1 class="articles-title"><nuxt-link :to="`/articles/${article.url}`">{{article.title}}</nuxt-link></h1>
        <div class="meta-box gloab-a">
            <i class="iconfont icon-date"></i><time class="create-timer">{{article.gmtCreate}}</time>
            <i class="iconfont icon-tag"></i>
            <span v-for="(tag, key) in tags" :key="key">
              <nuxt-link to="/">{{tag}}</nuxt-link>{{ key === (tags.length - 1) ? "" : "，"}}
            </span>
            <!-- <i class="iconfont icon-bi"></i><span>9148字</span>
            <i class="iconfont icon-loudou"></i><span>19分钟阅读</span> -->
        </div>
        <div class="content md" v-html="renderHmtl"></div>
        <!-- 前一篇、后一篇 -->
        <div class="wrap-other-article" v-if="prevArticle || nextArticle">
          <div class="wrap-other-page">
            <p class="wrap-other-title"><i class="iconfont icon-look"></i><span>#看看其他</span></p>
            <p class="clearfix">
              <nuxt-link v-if="prevArticle" class="left" :to="`/articles/${prevArticle.url}`">前一篇:&nbsp;{{prevArticle.title}}</nuxt-link>
              <nuxt-link v-if="nextArticle" class="right" :to="`/articles/${nextArticle.url}`">后一篇:&nbsp;{{nextArticle.title}}</nuxt-link>
            </p>
          </div>
        </div>
        <!-- 页脚 -->
        <global-footer></global-footer>
    </div>
</template>

<script>
// 包安装: npm i highlight.js marked -S
// import hljs from 'highlight.js'
// const marked = require('marked');

// marked.setOptions({
//   renderer: new marked.Renderer(),
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: false,
//   highlight: function (code) {
//     return hljs.highlightAuto(code).value;
//   }
// });
//  使用: renderHmtl: marked(article.content)
import GlobalFooter from '~/components/global-footer'

export default {
  components: { GlobalFooter },
  head() {
    return {
      title: `Y. Jer 的虚拟笔记 - ${this.article.title}`,
    }
  },
  async asyncData({ $axios, params }) {
    const data = await $axios.get(`/client/article/${params.url}/detail`)
    const { article, nextArticle, prevArticle } = data.result

    return {
      article,
      nextArticle,
      prevArticle,
      tags: article.tags.split(','),
      renderHmtl: article.content,
    }
  }
}
</script>
<style lang="stylus">
// 页面样式参考 : https://www.mdeditor.com/
@import "md.styl";

.articles-detail{
  margin-right 66px
  .articles-title{
    margin-top 30px
    font-size 28px
    a {
      color #2a2935
      &:hover{
        text-decoration underline
      }
    }
  }
  .meta-box{
    margin 2em 0;
    padding 10px 0;
    border-top 1px dashed #cacaca;
    border-bottom 1px dashed #cacaca;
    font-size 12px;
    color #757575;

    .iconfont{
      vertical-align middle
    }
    time,span,a{
      vertical-align middle
    }
    .icon-date{
      margin-right 3px
    }
    .icon-tag{
      margin-right 6px
    }
    .icon-bi{
      margin-right 6px
    }
    .icon-loudou{
      margin-right 3px
    }
    .icon-tag, .icon-bi, .icon-loudou{
      margin-left 25px
      font-size 14px
      color #949494
    }
  }
  h1, h2{
    margin 1rem 0
  }
  .content{
    font-size 15px
  }
  .wrap-other-article {
    border: 1px solid #d8d7d7;
    padding: 1px;
    margin 60px 0 20px 0;
  }
  .wrap-other-page{
    margin: 0;
    border: 1px dashed #d8d7d7;
    padding: 1em;
    position: relative;

    a{
      color #ffc402
      &:hover{
        color #b48a00
      }
    }
    .left{
      float left
    }
    .right{
      float right
    }

    .clearfix{
      font-size 14px
      overflow auto
    }
  }
  .wrap-other-title{
    position: absolute;
    left: -6px;
    top: -18px;
    background: #fff;
    border: 1px solid #c5c5c5;
    padding: 0 6px;
    font-size: 14px;
    color: #333;
    text-align: left;
    width: 110px;

    .icon-look{
      margin-right 4px
    }

    span{
      font-size 13px
    }
  }
}
</style>

