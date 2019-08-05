<template>
    <div class="articles-page">
        <h1 class="articles-title"><nuxt-link to="/articles/eeee">ESLint 在中大型团队的应用实践</nuxt-link></h1>
        <div class="meta-box gloab-a">
            <i class="iconfont icon-date"></i><time class="create-timer">2019-07-10 14:31:48</time>
            <i class="iconfont icon-tag"></i><nuxt-link to="/">前端</nuxt-link>， <nuxt-link to="/">前端</nuxt-link>
            <i class="iconfont icon-bi"></i><span>9148字</span>
            <i class="iconfont icon-loudou"></i><span>19分钟阅读</span>
        </div>
        <div class="content">
            <h2>引言</h2>
            <p>代码规范是软件开发领域经久不衰的话题，几乎所有工程师在开发过程中都会遇到，并或多或少会思考过这一问题。随着前端应用的大型化和复杂化，越来越多的前端工程师和团队开始重视 JavaScript 代码规范。得益于前端开源社区的繁盛，当下已经有几种较为成熟的 JavaScript 代码规范检查工具，包括 JSLint、JSHint、ESLint、FECS 等等。本文主要介绍目前较为通用的方案——ESLint，它是一款插件化的 JavaScript 代码静态检查工具，其核心是通过对代码解析得到的 AST（Abstract Syntax Tree，抽象语法树）进行模式匹配，定位不符合约定规范的代码。</p>
        </div>
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
        const data = await $axios.get('/api/article/6/detail')

        return {
            aaaahmtl: marked(data.result.content)
        }
    }
}
</script>
<style lang="stylus">
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
    h2{
        margin 1rem 0
    }
    .content{
        font-size 15px
    }
    
}
</style>

