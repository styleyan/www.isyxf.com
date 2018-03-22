<template>
  <ul>
    <li v-for="(item, key) in list" :key="key">
      {{item.index}} : {{item.value}}
    </li>
  </ul>
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
  data() {
    return {
      testList: this.list,
    }
  },
  watch: {
    list(newList) {
      console.log('-----------newList-----------', newList)
    },
  },
}
</script>

