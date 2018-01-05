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
    <nav class="pagination">
      <a href="/?page=2" class="next">下一页 &raquo;</a>
      <div class="center">
        <a href="/archive" class="">博客归档</a>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'index-page',
  data() {
    return {
      aritcleList: [],
    }
  },
  created() {
    this.$ajax.blogList({
      pageActive: 1,
      pageSize: 10,
    }).then((result) => {
      this.aritcleList = result.list
    })
  },
}
</script>

