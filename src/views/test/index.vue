<template>
  <div class="">
    <test-ul :list="list"></test-ul>
    数组对象: {{list}}<br>
    <ul>
      <li v-for="(val, key) in staticList" :key="key">
        {{val}}
      </li>
    </ul>
    {{staticList}}
  </div>
</template>
<script>
import TestUl from './test-ul.vue'

export default {
  name: 'test',
  components: {
    TestUl,
  },
  data() {
    return {
      list: [
        { index: 'ffff', value: 'yxf' },
        { index: 'cccc', value: 'wn' },
      ],
      staticList: [2, 3, 4, 5, 7],
    }
  },
  mounted() {
    // 数组，基本类型
    this.staticArray()
    // 数组对象的方式监听
    this.testArrayObject()
  },
  methods: {
    staticArray() {
      setTimeout(() => {
        // this.staticList[0] = '我是setTimeout触发的'
        this.$set(this.staticList, 0, '我是setTimeout触发的')
        console.log(this.staticList)
      }, 5000)
    },
    /**
     * 数组对象的方式监听
     */
    testArrayObject() {
      setTimeout(() => {
        // 通过这种方式改变数据无法触发视图更新和watch方法.
        this.list[1] = { index: '我是setTimeout 改变的', value: 'wn' }
        // 通过 $set 能让watch监听到数组更新以及视图渲染。
        // this.$set(this.list, 1, { index: '我是setTimeout 改变的', value: 'wn' })
      }, 3000)
    },
  },
}
</script>
