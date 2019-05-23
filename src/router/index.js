import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../views/index/index-a.vue'], resolve),
    },
    {
      path: '/archive',
      name: 'archive',
      component: resolve => require(['../views/archive/index.vue'], resolve),
    },
    {
      path: '/link',
      name: 'link',
      component: resolve => require(['../views/link/index.vue'], resolve),
    },
    {
      path: '/articles',
      name: 'articles',
      component: resolve => require(['../views/articles/index.vue'], resolve),
    },
    {
      path: '/article',
      name: 'article',
      component: resolve => require(['../views/article/router-view.vue'], resolve),
      children: [
        {
          name: 'article-detail',
          path: ':articleId',
          component: resolve => require(['../views/article/detail/index.vue'], resolve),
        },
      ],
    },
    {
      path: '/series',
      name: 'series',
      component: resolve => require(['../views/series/index.vue'], resolve),
    },
    {
      path: '/books',
      name: 'books',
      component: resolve => require(['../views/books/index.vue'], resolve),
    },
    {
      path: '/maxim',
      name: 'maxim',
      component: resolve => require(['../views/maxim/index.vue'], resolve),
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['../views/test/index.vue'], resolve),
    },
    {
      path: '/interview',
      name: 'interview',
      component: resolve => require(['../views/interview/index.vue'], resolve),
    },
  ],
  // 滚动到顶部
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})
