<template>
  <article class="archive">
    <page-title title="按月存档"></page-title>
    <div class="archive-item"
      v-for="(archive, key) in archiveList"
      :key="key">
      <p>
        <strong class="classify">{{archive.classify}}</strong><span class="num">({{archive.list.length}})</span>
      </p>
      <ul>
        <li
          v-for="(item, key) in archive.list"
          :key="key">
          <i class="iconfont icon-spot"></i>
          <nuxt-link :to="{path:`/article/${item.articleId}`, query: { u: item.uuid }}">{{item.title}}</nuxt-link>&nbsp;
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import PageTitle from '~/components/PageTitle'

export default {
  head() {
    return {
      title: 'Y. Jer 的虚拟笔记 - 归档',
    }
  },
  components: { PageTitle },
  async asyncData({ $axios }) {
      let data = await $axios.get("/client/archive/list")
      const archiveList = []
      let item = {}

      data.result.forEach((curr, i, arrays) => {
        let timer = curr.gmtCreate.substring(0, 7);

        // 初始化
        if (!i){
          item.classify = timer
          item.list = []
        }

        if (item.classify !== timer) {
          archiveList.push(item)
          item = {}
          item.list = []
          item.classify = timer
        }
        item.list.push(curr)

        // 如果是最后一个
        if (i === arrays.length - 1) {
          archiveList.push(item)
        }
      })

      return {
        archiveList
      }
  }
}
</script>
<style lang="stylus">
.archive-item{
  margin-bottom 26px

  ul {
    margin-left -4px
    font-size 16px
  }

  a{
    color #333

    &:hover{
      text-decoration underline
    }
  }

  .classify{
    font-size 20px
    font-weight 500
  }
  .num{
    font-size 14px
    margin-left 4px
  }
  .classify,.num{
    vertical-align middle
  }
}
</style>

