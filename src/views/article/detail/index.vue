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
    <nav class="pagination">
      <a href="/post/mac-karabiner-elements-for-keyborad" class="prev">&laquo; Mac外接键盘利器: karabiner-elements</a>
      <a href="/post/something-about-headless-chrome" class="next">Headless Chrome目前的一些问题 &raquo;</a>
    </nav>
    <div class="comments">
      <div id="disqus_thread"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'article-detail',
  data() {
    return {
      formValidate: {},
      url: `${location.origin}${this.$route.path}`,
    }
  },
  created() {
    const {articleId} = this.$route.params
    if (articleId) {
      this.blogDetail(articleId)
    }
  },
  methods: {
    /**
     * 编辑文章，初始化文章信息
     * @param {String} articleId - 文章id
     */
    blogDetail(articleId) {
      this.$ajax.blogDetail({articleId}).then((result) => {
        console.log(result)
        this.formValidate = result
      }).catch(() => {
        this.$Message.error('服务器错误了')
      })
    },
  },
}
</script>
