<template>
  <div>
    我是test-ul-b <input v-model="aaa" />
    <button @click="cb('我是回调', 'eeeee')">测试回调</button>
  </div>
</template>
<script>
export default {
  name: 'test-ul',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    cb: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      aaa: 2,
      ds: this.value,
    }
  },
  watch: {
    ds(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.ds = val
    },
  },
}
</script>
