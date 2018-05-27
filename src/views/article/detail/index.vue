<template>
  <div>
    <article class="article">
      <div class="article-meta">
        <div class="date-font">{{formValidate.createTime}}</div>
      </div>
      <h1 class="article-title">{{formValidate.title}}</h1>
      <!-- 暂时去掉  <article-catalogues></article-catalogues> -->
      <div class="entry-content" v-html="formValidate.render"></div>
      <p>本文链接：<a :href="url">{{url}}</a></p>
      <p>-- <acronym title="End of File">EOF</acronym> --</p>
      <p class="post-info">
        <!-- 发表于<i>{{formValidate.createTime}}</i>, 
        添加在分类「 <a data-cate="前端"><code class="notebook">前端</code></a> 」下, 
        并被添加「 <a href="/tag/react%20native" class="" data-tag="react native"><code class="notebook">react native</code></a> 」标签 ，
        最后修改于 <i>{{formValidate.updateTime}}</i> -->
      </p>
    </article>
    <pagination :prevTo="prevTo" :nextTo="nextTo"></pagination>
  </div>
</template>
<script>
export default {
  name: 'article-detail',
  data() {
    return {
      prevTo: null,
      nextTo: null,
      formValidate: {},
      url: `${location.origin}${this.$route.path}`,
    }
  },
  created() {
    this.blogDetail(this.$route.query.u)
  },
  methods: {
    /**
     * 编辑文章，初始化文章信息
     * @param {String} uuid - 文章id
     */
    blogDetail(uuid) {
      if (!uuid) return
      this.$ajax.blogDetail({uuid}).then((result) => {
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
