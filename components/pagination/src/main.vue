<template>
  <nav class="pagination">
    <nuxt-link v-if="hasPreviousPage" to="/" class="prev">&laquo; 上一页</nuxt-link>
    <nuxt-link v-if="hasNextPage" to="/" class="next">下一页 &raquo;</nuxt-link>
    <div v-if="isShow" class=center>
      <nuxt-link to="/archive">博客归档</nuxt-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    hasPreviousPage: {
      type: Boolean,
      default: false
    },
    hasNextPage: {
      type: Boolean,
      default: false
    }
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
