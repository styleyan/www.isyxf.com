const initState = {
  name: 'yxf',
  add: '江西',
}

const types = {
  UPDATE_NAME: 'update_name',
}

const mutations = {
  [types.UPDATE_NAME](state, data) {
    Object.assign(state, data)
  },
}

const actions = {
  updateName(content, data) {
    content.commit(types.SET_NAME, data)
  },
}

const getters = {
  getName: (state) => state.name,
}

export default {
  namespaced: true,
  state: initState,
  mutations,
  actions,
  getters,
}