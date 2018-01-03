<template>
  <div class="wrap-main">
    <footer id="footer">
      © 2018&nbsp;-&nbsp; Y. Jer&nbsp;的虚拟笔记&nbsp;-&nbsp;<a target="_blank" rel="nofollow noopener" class="external beian" href="http://www.miitbeian.gov.cn/">浙ICP备&nbsp;17050781号</a>
      <br>Powered by&nbsp;&nbsp;<a target="_blank" href="https://github.com/vuejs/vue">Vue2</a>&nbsp;&&nbsp;<a target="_blank" href="https://github.com/koajs/koa">Koa2</a>
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

