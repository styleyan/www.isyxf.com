import ArticleList from './src/main.vue'

ArticleList.install = (Vue) => {
  Vue.component(ArticleList.name, ArticleList)
}
export default ArticleList

