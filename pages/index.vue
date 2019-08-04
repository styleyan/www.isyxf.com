<template>
  <section id="page-index">
    <page-title title="最近更新"></page-title>
    <div class="row-container-wrapper">
        <article
          class="article-index"
          v-for="(item, key) in aritcleList"
          :key="key">
          <div class="article-col">
              <h2 class="article-title">
                <nuxt-link :to="{path:`/article/${item.url}`}">{{item.title}}</nuxt-link>
              </h2>
              <div class="infos">
                <i class="iconfont icon-date"></i>
                <time class="create-timer">{{item.gmtCreate}}</time>
              </div>
              <div class="brief">
                {{item.brief}}
                <nuxt-link class="btn-primary" :to="{path:`/article/${item.articleId}`}">阅读更多</nuxt-link>
              </div>
              <div class="article-tags">
                <i class="iconfont icon-tag"></i>&nbsp;
                <nuxt-link to="/">前端</nuxt-link>， <nuxt-link to="/">前端</nuxt-link>
              </div>
          </div>
        </article>
    </div>

    <div class="row-container-wrapper">
        <article
          class="article-index"
          v-for="(item, key) in aritcleList"
          :key="key">
          <div class="article-col">
              <h2 class="article-title">
                <nuxt-link :to="{path:`/article/${item.url}`}">{{item.title}}</nuxt-link>
              </h2>
              <div class="infos">
                <i class="iconfont icon-date"></i>
                <time class="create-timer">{{item.gmtCreate}}</time>
              </div>
              <div class="brief">
                {{item.brief}}
                <nuxt-link class="btn-primary" :to="{path:`/article/${item.articleId}`}">阅读更多</nuxt-link>
              </div>
              <div class="article-tags">
                <i class="iconfont icon-tag"></i>&nbsp;
                <nuxt-link to="/">前端</nuxt-link>， <nuxt-link to="/">前端</nuxt-link>
              </div>
          </div>
        </article>
    </div>

    <!-- <pagination :hasPreviousPage="hasPreviousPage" :hasNextPage="hasNextPage" :isShow="true"></pagination> -->
  </section>
</template>

<script>
import Pagination from '~/components/pagination'
import PageTitle from '~/components/PageTitle'

export default {
  components: { Pagination, PageTitle },
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
.row-container-wrapper{
  overflow auto
  margin-bottom 30px
  display:flex
  
}
.article-index{
  padding: 20px 66px 20px 0;
  min-height 1px
  overflow: auto;
  flex: 1

  .article-col{
    border-bottom: 1px dotted #eee;
    padding-bottom: 3px;
  }
  .create-timer, .article-tags{
      font-size 12px
      color #757575
  }
  
  .article-tags{
    a{
      text-decoration underline
      text-underline-position under
      color #757575
    }  
  }

  .infos{
    margin-bottom 6px  
  }
  .iconfont{
      color #757575
  }
  .brief{
    font-size 15px
    padding-bottom 16px
  }
}

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
</style>

