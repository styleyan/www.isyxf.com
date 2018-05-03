import Vue from 'vue'
import vuex from 'vuex'
import indexStore from './modules/index'

Vue.use(vuex)

const store = new vuex.Store({
  strict: true,
  modules: {
    indexStore,
  },
})

export default store