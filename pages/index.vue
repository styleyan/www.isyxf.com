<template>
  <section id="page-index">
    <article
      class="article"
      v-for="(item, key) in aritcleList"
      :key="key">
      <div class="article-meta">{{item.createTime}}</div>
      <h1 class="article-title">
        <router-link :to="{path:`/article/${item.articleId}`, query: { u: item.uuid }}">{{item.title}}</router-link>
      </h1>
      <div v-html="item.preMore"></div>
      <router-link :to="{path:`/article/${item.articleId}`, query: { u: item.uuid }}">阅读更多&raquo;</router-link>
    </article>
    <pagination :prevTo="prevTo" :nextTo="nextTo" :archive="true"></pagination>
  </section>
</template>

<script>
import Pagination from '~/components/pagination'

export default {
  components: { Pagination },
  data() {
    return {
      prevTo: null,
      nextTo: null,
    }
  },
  /**
   * 服务端渲染
   */
  async asyncData({ $axios }) {
    // let result = await $axios({
    //   url: "/api/remarkableWriting/list"
    // });

    return {
      aritcleList: [{
        "title": "linux 常用命令",
        "createTime": "2019-07-23 11:20:57",
        "isShow": true,
        "classify": "9kdc0bs9hbw",
        "articleId": "linux-cmd",
        "preMore": "<p>~ [...]",
        "uuid": "i1dpc5ru7zj",
        "updateTime": "2019-07-23 12:06:49",
        "classifyName": "服务器维护"
      },
      {
        "title": "hashMap 加载因子",
        "createTime": "2019-07-15 04:20:06",
        "isShow": true,
        "classify": "igkdzapa4kn",
        "articleId": "java-hanMap",
        "preMore": "<p>加载因子是标识Hash表中元素的填满程度，若加载因子越大，填满的元素越多，好处是空间利用率提升了，但冲突的机会加大了。[...]",
        "uuid": "gfwalg2t0hg",
        "updateTime": "2019-07-15 12:37:09",
        "classifyName": "java"
      }]
    }
  }
}
</script>

<style lang="stylus">

</style>

