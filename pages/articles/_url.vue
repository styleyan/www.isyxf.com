<template>
    <div class="articles-page">
        <h1 class="articles-title"><nuxt-link :to="`/articles/${url}`">{{title}}</nuxt-link></h1>
        <div class="meta-box gloab-a">
            <i class="iconfont icon-date"></i><time class="create-timer">{{gmtCreate}}</time>
            <i class="iconfont icon-tag"></i>
              <span v-for="(tag, key) in tags" :key="key">
                <nuxt-link to="/">{{tag}}</nuxt-link>{{ key === (tags.length - 1) ? "" : "，"}}
              </span>
            <i class="iconfont icon-bi"></i><span>9148字</span>
            <i class="iconfont icon-loudou"></i><span>19分钟阅读</span>
        </div>
        <div class="content md" v-html="renderHmtl"></div>
    </div>
</template>

<script>
import hljs from 'highlight.js'

const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

export default {
  async asyncData({ $axios, params }) {
    const data = await $axios.get(`/client/article/${params.url}/detail`)
    return {
      title: data.result.title,
      url: data.result.url,
      gmtCreate: data.result.gmtCreate,
      tags: data.result.tags.split(','),
      renderHmtl: marked(data.result.content)
    }
  }
}
</script>
<style lang="stylus">
// 页面样式参考 : https://www.mdeditor.com/
@import "md.styl";

.articles-page{
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
            font-size 14px;
            color #949494
        }
    }
    h1, h2{
        margin 1rem 0
    }
    .content{
        font-size 15px
    }

}
</style>

