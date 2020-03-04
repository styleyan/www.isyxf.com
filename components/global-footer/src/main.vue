<template>
  <footer class="footer">
    © 2020&nbsp;-&nbsp; Y. Jer&nbsp;的虚拟笔记&nbsp;-&nbsp;<a target="_blank" rel="nofollow noopener" class="external beian" href="http://beian.miit.gov.cn/">浙ICP备&nbsp;19042205号</a>
    <br>Powered by&nbsp;&nbsp;<a target="_blank" class="beian" href="https://github.com/vuejs/vue">Vue</a>&nbsp;& &nbsp;<a target="_blank" class="beian" href="https://zh.nuxtjs.org/">Nuxt</a>
  </footer>
</template>
<script>
export default {
  name: 'global-footer',
}
</script>
<style lang="stylus">
.footer {
  border-top: 1px solid #fff;
  font-size: .8em;
  line-height: 1.8;
  padding: 30px;
  text-align: center
  .beian {
    color: #666
  }
}
</style>
