import LoadingBar from './src/main.vue'

LoadingBar.install = (Vue) => {
  Vue.component(LoadingBar.name, LoadingBar)
}
export default LoadingBar
