<template>
  <div>
    <page-title title="文章列表"></page-title>
    <article-list :list="aritcleList"></article-list>
    <global-footer></global-footer>
  </div>
</template>
<script>
import PageTitle from '~/components/PageTitle'
import ArticleList from '~/components/article-list'
import GlobalFooter from '~/components/global-footer'

export default {
  name: "page-num",
  components: { PageTitle, ArticleList, GlobalFooter },
  data() {
    return {}
  },
  /**
   * 服务端渲染
   */
  async asyncData({ $axios, params }) {
    let data = await $axios.get("/client/article/list", {params: {pageNum: params.num, pageSize: 10}});

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
