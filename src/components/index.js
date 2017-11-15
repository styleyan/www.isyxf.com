import Toast from './toast/toast.vue'

const components = [
  Toast,
]

export default {
  install(Vue, opts = {}) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  },
}
