import Sidebar from './sidebar'
import MobileHeader from './mobile-header'
import MyFooter from './footer'
import ArticleCatalogues from './article-catalogues'
import Pagination from './pagination'

const components = [
  Sidebar,
  MobileHeader,
  MyFooter,
  ArticleCatalogues,
  Pagination,
]

const install = (Vue) => {
  if (install.installed) return
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}