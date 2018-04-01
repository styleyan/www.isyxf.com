<template>
  <article class="article archive">
    <h1 class="article-title">归档</h1>
    <div class="entry-content" 
      v-for="(archive, key) in archiveList"
      :key="key">
      <h3>{{archive.classify}} ({{archive.list.length}})</h3>
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
  name: 'sssdf',
  data() {
    return {
      archiveList: [],
    }
  },
  created() {
    this.getArchive()
  },
  methods: {
    /**
     * 获取文章归类数据
     */
    getArchive() {
      this.$ajax.blogArchive().then((data) => {
        this.archiveList = data
      }).catch((msg) => {
        global.console.log(msg)
      })
    },
  },
}
</script>
