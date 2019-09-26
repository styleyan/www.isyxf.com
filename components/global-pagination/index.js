import GlobalPagination from './src/main.vue'

GlobalPagination.install = (Vue) => {
  Vue.component(GlobalPagination.name, GlobalPagination)
}
export default GlobalPagination

