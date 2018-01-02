<template>
  <div>
    <nav v-if="pagination" class="pagination">
      <a href="/?page=2" class="next">下一页 &raquo;</a>
      <div class="center">
        <a href="/archive" class="">博客归档</a>
      </div>
    </nav>
    <footer id="footer" class="inner">© 2016&nbsp;-&nbsp; Smallpath的小站 &nbsp;-&nbsp;
      <a target="_blank" href="https://github.com/smallpath/blog">博客源码</a><br> Powered by&nbsp;
      <a target="_blank" href="https://github.com/vuejs/vue">Vue2</a>&nbsp;&amp;&nbsp;
      <a target="_blank" href="https://github.com/koajs/koa">Koa2</a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'my-footer',
  props: {
    pagination: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

