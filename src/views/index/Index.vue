<template>
  <section id="page-index">
    <article class="post" 
      v-for="(item, key) in aritcleList"
      :key="key">
      <div class="meta">{{item.createTime}}</div>
      <h1 class="title"><a :href="`/article/${item.articleId}`">{{item.title}}</a></h1>
      <div class="entry-content" v-html="item.preMore"></div>
      <a :href="`/article/${item.articleId}`">阅读更多&raquo;</a>
    </article>
    <pagination :prevTo="prevTo" :nextTo="nextTo" :archive="true"></pagination>
  </section>
</template>

<script>
export default {
  name: 'index-page',
  data() {
    return {
      aritcleList: [],
      prevTo: {query: { pg: 3 }, text: '上一页'},
      nextTo: {query: { pg: 5 }, text: '下一页'},
    }
  },
  created() {
    this.getData()
  },
  watch: {
    '$router'(to, from) {
      console.log(to)
    },
  },
  methods: {
    getData() {
      this.$ajax.blogList({
        pageActive: 1,
        pageSize: 10,
      }).then((result) => {
        this.aritcleList = result.list
      })
    },
  },
}
</script>

