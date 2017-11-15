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
      msg: 'Welcome to list',
      val: '4',
    }
  },
  methods: {
    clickMe() {
      console.log('aaa')
    },
  },
}
</script>
<style>
.hello .el-input{
  width: auto
}
</style>

