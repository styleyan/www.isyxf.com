<template>
  <div>
    我是test-ul-b <input v-model="aaa" />
    {{ds}}
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
