<template>
  <div id="page-post">
    <article class="post detail">
      <div class="meta">
        <div class="date">{{formValidate.createTime}}</div>
      </div>
      <h1 class="title">{{formValidate.title}}</h1>
      <!-- 暂时去掉  <article-catalogues></article-catalogues> -->
      <div class="entry-content" v-html="formValidate.render"></div>
      <p>本文链接：<a :href="url">{{url}}</a></p>
      <p>-- <acronym title="End of File">EOF</acronym> --</p>
      <div class="post-info">
        <p> 发表于 <i>2017-09-12 11:33:21</i> ， 添加在分类「 <a data-cate="前端"><code class="notebook">前端</code></a> 」下 ，并被添加「 <a href="/tag/react%20native" class="" data-tag="react native"><code class="notebook">react native</code></a> 」标签 ，最后修改于 <i>2017-10-02 19:37:26</i></p>
      </div>
    </article>
    <pagination :prevTo="prevTo" :nextTo="nextTo"></pagination>
    <div class="comments">
      <div id="disqus_thread"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'article-detail',
  props: {
    articleId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      prevTo: null,
      nextTo: null,
      formValidate: {},
      url: `${location.origin}${this.$route.path}`,
    }
  },
  created() {
    this.blogDetail(this.articleId)
  },
  watch: {
    articleId(newArticleId) {
      this.blogDetail(newArticleId)
    },
  },
  methods: {
    /**
     * 编辑文章，初始化文章信息
     * @param {String} articleId - 文章id
     */
    blogDetail(articleId) {
      if (!articleId) return
      this.$ajax.blogDetail({articleId}).then((result) => {
        this.formValidate = result.article
        this.setPage(result.prevTo, result.nextTo)
      }).catch(() => {
        this.$Message.error('服务器错误了')
      })
    },
    /**
     * 设置翻页
     */
    setPage(prevTo, nextTo) {
      this.prevTo = prevTo ? { path: `/article/${prevTo.articleId}`, text: prevTo.title } : null
      this.nextTo = nextTo ? { path: `/article/${nextTo.articleId}`, text: nextTo.title } : null
    },
  },
}
</script>
