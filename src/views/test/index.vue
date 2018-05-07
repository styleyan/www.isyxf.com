<template>
  <div class="">
    <test-ul></test-ul>
    <test-ul-b :cb="cbHandler" v-model="testProps"></test-ul-b>
  </div>
</template>
<script>
import TestUl from './test-ul.vue'
import TestUlB from './test-ul-b.vue'
// import { getters } from 'vuex'

export default {
  name: 'test',
  components: {
    TestUl,
    TestUlB,
  },
  data() {
    return {
      testProps: true,
      shows: false,
    }
  },
  mounted() {
    console.log(this.$options.state)
  },
  methods: {
    cbHandler(msg, aa) {
      console.log(msg)
    },
  },
}
</script>
