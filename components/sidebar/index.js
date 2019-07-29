import Sidebar from './src/main.vue'

Sidebar.install = (Vue) => {
  Vue.component(Sidebar.name, Sidebar)
}
export default Sidebar

