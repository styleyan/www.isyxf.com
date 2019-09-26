<template>
  <section id="page-index">
    <page-title title="最近更新"></page-title>
    <article-list :list="aritcleList"></article-list>
    <nuxt-link v-if="hasNextPage" class="btn-primary btn-more" to="/page/2">浏览更多文章</nuxt-link>
    <global-footer></global-footer>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle'
import ArticleList from '~/components/article-list'
import GlobalFooter from '~/components/global-footer'

export default {
  components: { PageTitle, ArticleList, GlobalFooter },
  data() {
    return {}
  },
  /**
   * 服务端渲染
   */
  async asyncData({ $axios }) {
    let data = await $axios.get("/client/article/list", {params: {pageNum: 1, pageSize: 10}});

    const aritcleList = [];
    const list = (data.result && data.result.list) || []

    for(let i = 0, len = list.length; i < len; i+=2){
      aritcleList.push(list.slice(i, i+2));
    }

    return {
      aritcleList,
      hasNextPage: data.result.hasNextPage
    }
  }
}
</script>

<style lang="stylus">
.btn-primary{
    color: #fff;
    background-color: #ffc402;
    border-color: #ffc402;
    font-size: 9px;
    line-height: 1.5;
    border-radius: 3px;
    padding: 1px 5px;

  &:hover{
    background-color: #ce9e00;
    border-color: #c49600;
  }
}
.btn-more {
  display block
  width 96px
  margin-top 24px
  padding 8px 12px
  font-weight bold
}
</style>

