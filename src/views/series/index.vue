<template>
  <div class="my-series">
    <template 
      v-for="item in list">
      <h3 class="my-series-h3">{{item.classifyName}}</h3>
      <p class="my-series-p">{{item.desc}}</p>
      <ul class="my-series-ul">
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
<style lang="stylus">
.my-series {
  &-ul {
    margin 6px 0 0 20px
  }
  &-p {
    margin-top 2px
  }
  &-h3{
    margin-top 30px
    font-size 1.3em
  }
}
</style>
