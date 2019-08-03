<template>
<article class="article archive">
    <h1 class="article-title">按月存档</h1>
    <div class="entry-content" 
      v-for="(archive, key) in archiveList"
    :key="key">
    <h3>{{archive.classify}}&nbsp;({{archive.list.length}})</h3>
    <ul>
        <li 
        v-for="(item, key) in archive.list"
        :key="key">
        <router-link :to="{path:`/article/${item.articleId}`, query: { u: item.uuid }}">{{item.title}}</router-link>&nbsp;
        <span class="date-font">{{item.createTime}}</span>
        </li>
    </ul>
    </div>
</article>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        let data = await $axios.get("/api/client/archive")
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
