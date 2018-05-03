<template>
  <div>
    我是test-ul
  </div>
</template>
<script>
export default {
  name: 'test-ul',
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
  },
  activated() {
    console.log('激活组件')
  },
  deactivated() {
    console.log('休眠组件')
  },
}
</script>
