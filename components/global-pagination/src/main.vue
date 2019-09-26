<template>
  <nav class="pagination">
    <ul>
      <li :class="{disable: hasPreviousPage ? false : true}">
        <nuxt-link to="/page/1">&laquo;&laquo;</nuxt-link>
      </li>
      <li :class="{disable: hasPreviousPage ? false : true}">
        <nuxt-link :to="`/page/${pageNum-1}`">&laquo;</nuxt-link>
      </li>
      <li :class="{active: pageNum == page ? true : false}" v-for="(page,index) in navigatepageNums" :key="index">
        <nuxt-link :to="`/page/${page}`">{{page}}</nuxt-link>
      </li>
      <li :class="{disable: hasNextPage ? false : true}">
        <nuxt-link :to="`/page/${pageNum+1}`">&raquo;</nuxt-link>
      </li>
      <li :class="{disable: hasNextPage ? false : true}">
        <nuxt-link :to="`/page/${navigatepageNums[navigatepageNums.length-1]}`">&raquo;&raquo;</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'global-pagination',
  props: {
    navigatepageNums: {
      type: Array,
      default: () => ([]),
    },
    pageNum: {
      type: Number,
      default: 1,
    },
    hasNextPage: {
      type: Boolean,
      default: true,
    },
    hasPreviousPage: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style lang="stylus">
.pagination {
  height: 34px;
  display: inline-block;
  padding-left: 0;
  margin: 14px 0;
  border-radius: 4px;
  font-size: 0;

  li {
    display: inline-block;
    font-size 14px;

    a,span{
      position: relative;
      float: left;
      padding: 8px 12px;
      line-height: 1.42857143;
      text-decoration: none;
      color: #ffc402;
      background-color: #fff;
      border: 1px solid #ddd;
      margin-left: -1px;

      &:hover{
        z-index: 2;
        color: #b48a00;
        background-color: #eee;
        border-color: #ddd;
      }
    }
  }

  li:first-child>a{
    margin-left: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  li:last-child>a {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }

  .active {
    a,span{
      z-index: -1;
      color: #aea79f;
      background-color: #f5f5f5;
      border-color: #ddd;
      cursor: default;
    }
  }

  .disable {
    cursor: not-allowed;
    a,span{
      z-index: -1;
    }
  }
}

</style>
