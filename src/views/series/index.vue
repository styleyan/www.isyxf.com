<template>
  <div>
    <template 
      v-for="item in list">
      <h3>{{item.classifyName}}</h3>
      <p>{{item.desc}}</p>
      <ul>
        <li v-for="(at, key) in item.list" :key="key">
          <router-link :to="{path:`/article/${at.articleId}`, query: { u: at.uuid }}">{{at.title}}</router-link>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
export default {
  name: 'yxf-list',
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$ajax.blogSeries({origin: 'www'}).then((result) => {
        console.log(result)
        this.list = result.list
      })
    },
  },
}
</script>

