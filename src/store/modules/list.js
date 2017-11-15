/**
 * 首页state
 */

import * as types from '../mutations-type.js'

const state = {
  broadList: [
    {name: '小白', 'age': 21},
    {name: '张三', 'age': 11},
    {name: '小明', 'age': 18},
    {name: '小灰', 'age': 16},
  ],
}

const mutations = {
  [types.INDEX_BROAD_LIST]({broadList}) {
    console.log(broadList)
  },
}

export default {
  namespaced: true,
  mutations,
  state,
}
