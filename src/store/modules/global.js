/**
 * 全局 state
 */

import * as types from '../mutations-type.js'

const state = {
  navigates: [
    {name: 1, text: '选项 1'},
    {name: 2, text: '选项 2'},
    {name: 3, text: '选项 3'},
  ],
}

const mutations = {
  [types.GLOBAL_NAVIGATES]({userInfo}, data) {
    Object.assign(userInfo, data)
  },
}

const getters = {
  navigates: state => state.navigates,
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
}
