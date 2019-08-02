<template>
  <section id="page-index">
    <article
      class="article"
      v-for="(item, key) in aritcleList"
      :key="key">
      <div class="article-meta">{{item.gmtCreate}}</div>
      <h1 class="article-title">
        <router-link :to="{path:`/article/${item.url}`}">{{item.title}}</router-link>
      </h1>
      <div v-html="item.brief"></div>
      <router-link :to="{path:`/article/${item.articleId}`}">阅读更多&raquo;</router-link>
    </article>
    <pagination :hasPreviousPage="hasPreviousPage" :hasNextPage="hasNextPage" :isShow="true"></pagination>
  </section>
</template>

<script>
import Pagination from '~/components/pagination'

export default {
  components: { Pagination },
  data() {
    return {}
  },
  /**
   * 服务端渲染
   */
  async asyncData({ $axios }) {
    let data = await $axios.get("/api/article/list", {params: {pageNum: 2, pageSize: 2}});

    return {
      aritcleList: data.result.list,
      hasNextPage: data.result.hasNextPage,
      hasPreviousPage: data.result.hasPreviousPage
    }
  }
}
</script>

<style lang="stylus">

</style>

