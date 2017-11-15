<template>
  <div class="my-test">{{text}}-{{foo}}</div>
</template>
<script>
export default {
  name: 'toast',
  props: {
    text: {
      type: String,
      default: 'aaaa',
    },
  },
  data() {
    return {
      foo: 'yxf',
    }
  },
  methods: {
    setFoo() {
      this.foo = 'yxf'
    },
  },
}
</script>

<style>
  .my-test{
    width: 180px;
    line-height: 60px;
    border: 1px solid red;
    font-size: 16px;
  }
</style>
