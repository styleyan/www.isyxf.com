<template>
  <div class="series-page">
    <page-title title="专题分类"></page-title>
    <article class="series-item" v-for="(item) in list"  :key="item.id">
        <dl>
          <dt class="title">{{item.title}}</dt>
          <dd class="desc">ps:&nbsp;{{item.desc}}</dd>
        </dl>
        <ul class="ul">
          <li v-for="(at, key) in item.list" :key="key">
            <i class="iconfont icon-spot"></i>
            <nuxt-link :to="{path:`/article/${at.articleId}`, query: { u: at.uuid }}">{{at.title}}</nuxt-link>
          </li>
        </ul>
    </article>
  </div>
</template>

<script>
import { Promise } from 'q';
import PageTitle from '~/components/PageTitle'

export default {
  components: { PageTitle },
  async asyncData({ $axios }) {
    const list = []

    await Promise.all([
      $axios.get("/api/classify/list"),
      $axios.get("/api/client/archive")
    ]).then((data) => {
      const firstRequest = data[0].result
      const secondRequest = data[1].result

      firstRequest.forEach((item, i) => {
        const fl = secondRequest.filter((currItem) => currItem.classifyId === item.id)
        item.list = fl;
        list.push(item)
      })
    })

    return { list }
  }
}
</script>
<style lang="stylus">
.series-page {
  &-ul {
    margin 6px 0 0 20px
  }
}

.series-item{
  margin-bottom 22px
  dl{
    padding-bottom 8px
  }
  .title{
    font-size 22px
  }
  .desc{
    margin-top -6px
    font-size 14px  
    color #757575
  }
  .ul{ 
    font-size 15px
    margin-left -6px

    a{
      color #333

      &:hover{
        text-decoration underline  
      }
    }
  }
}
</style>

