<template>
  <nav class="pagination">
    <router-link v-if="prevTo" :to="prevTo" class="prev">&laquo; {{prevTo.text}}</router-link>
    <router-link v-if="nextTo" :to="nextTo" class="next">{{nextTo.text}} &raquo;</router-link>
    <div v-if="archive" class=center>
      <router-link :to="{name:'archive'}">博客归档</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    // 是否显示博客归档
    archive: {
      type: Boolean,
      default: false,
    },
    // 向前配置
    prevTo: {
      type: Object,
      default: null,
    },
    // 向后配置
    nextTo: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="stylus">
.pagination {
  border-top: 1px solid #fff
  border-bottom: 1px solid #ddd
  line-height: 20px
  overflow: hidden
  padding: 20px 0
  position: relative
  width: 100%
  font-size: 14px

  .prev {
    float: left
  }
  
  .next {
    float: right
  }

  .center {
    margin: auto
    text-align: center
    width: 80px
  }
}

</style>
