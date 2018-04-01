<template>
  <section id="page-index">
    <article class="post" 
      v-for="(item, key) in aritcleList"
      :key="key">
      <div class="meta">{{item.createTime}}</div>
      <h1 class="title"><router-link :to="{path:`/article/${item.articleId}`, query: { u: item.uuid }}">{{item.title}}</router-link></h1>
      <div class="entry-content" v-html="item.preMore"></div>
      <router-link :to="{path:`/article/${item.articleId}`, query: { u: item.uuid }}">阅读更多&raquo;</router-link>
    </article>
    <pagination :prevTo="prevTo" :nextTo="nextTo" :archive="true"></pagination>
  </section>
</template>

<script>
export default {
  name: 'index-page',
  props: {
    pg: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      aritcleList: [],
      prevTo: null,
      nextTo: null,
    }
  },
  watch: {
    pg(page) {
      this.getData(page)
    },
  },
  created() {
    this.getData(this.pg)
  },
  methods: {
    /**
     * 获取当前页数据
     * @param {Number} page - 页码
     */
    getData(page) {
      this.$ajax.blogList({
        pageActive: page,
        pageSize: 10,
      }).then((result) => {
        this.aritcleList = result.list
        this.setPage(result.pageActive, result.pageSize, result.pageTotal)
      })
    },
    /**
     * 设置翻页
     * @param {Number} page - 当前页码
     * @param {Number} size - 当前页数量
     * @param {Number} total - 总条数
     */
    setPage(page, size, total) {
      if (page <= 1) {
        this.prevTo = null
      } else {
        this.prevTo = {query: { pg: 1 }, text: '上一页'}
      }
      const allPage = Math.ceil(total / size)

      if (page >= allPage) {
        this.nextTo = null
      } else {
        this.nextTo = {query: { pg: ++page }, text: '下一页'}
      }
    },
  },
}
</script>

