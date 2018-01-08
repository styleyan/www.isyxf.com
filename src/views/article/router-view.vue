<template>
  <router-view :articleId="articleId"></router-view>
</template>
<script>
export default {
  computed: {
    articleId() {
      return this.$route.params.articleId
    },
  },
}
</script>
