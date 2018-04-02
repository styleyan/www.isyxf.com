<template>
  <div>
    <div class="tip">{{showInterview || '扫盲区'}}</div>
    <div class="btns">
      <button @click="tabHandler('css')">css</button>
      <button @click="tabHandler('js')">js</button>
      <button @click="tabHandler('mvvm')">mvvm</button>
      <button @click="tabHandler('http')">http</button>
      <button @click="tabHandler('other')">other</button>
      <button @click="tabHandler('node')">node</button>
      <button @click="tabHandler('webpack')">webpack</button>
    </div>
  </div>
</template>
<script>
import css from './script/css'
import http from './script/http'
import js from './script/js'
import mvvm from './script/mvvm'
import node from './script/node'
import other from './script/other'
import webpack from './script/webpack'

export default {
  name: 'interview',
  data() {
    return {
      css,
      js,
      mvvm,
      node,
      http,
      other,
      webpack,
      showInterview: '',
    }
  },
  methods: {
    tabHandler(type) {
      const currInterView = this[type]
      let index = 0

      if (currInterView.index < currInterView.length) {
        index = currInterView.index
      }

      this.showInterview = currInterView[index]
      currInterView.index = ++index
    },
  },
}
</script>

<style lang="stylus">
button {
  margin 0 10px
  padding 8px
}
.tip {
  text-align center
  padding 20px 10px
  height 280px
}
.btns {
  display flex
  justify-content space-between
}
</style>
