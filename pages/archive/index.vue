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
    async asyncData({ $axios }) {
        return {
            archiveList: [{
            "classify": "2019-07",
            "list": [{
                "title": "linux 常用命令",
                "createTime": "2019-07-23 11:20:57",
                "isShow": true,
                "articleId": "linux-cmd",
                "uuid": "i1dpc5ru7zj"
                },
                {
                "title": "hashMap 加载因子",
                "createTime": "2019-07-15 04:20:06",
                "isShow": true,
                "articleId": "java-hanMap",
                "uuid": "gfwalg2t0hg"
                },
                {
                "title": "后端技术栈架构",
                "createTime": "2019-07-09 11:24:49",
                "isShow": true,
                "articleId": "java-framework",
                "uuid": "v7itjko4op"
            }]
            }]
        }
    }
}
</script>

