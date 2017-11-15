<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>{{val | toFixed(2)}}</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to index',
      val: '4',
    }
  },
  methods: {
    clickMe() {
      this.$axios.post('/api/useInfo').then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
  },
}
</script>
<style>
.hello .el-input{
  width: auto
}
</style>

