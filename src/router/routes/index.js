/**
 * 首页路由
 */

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../../views/index/index.vue'], resolve),
  },
  {
    path: '/archive',
    name: 'archive',
    component: resolve => require(['../../views/archive/index.vue'], resolve),
  },
  {
    path: '/link',
    name: 'link',
    component: resolve => require(['../../views/link/index.vue'], resolve),
  },
  {
    path: '/article',
    name: 'article',
    component: resolve => require(['../../views/article/router-view.vue'], resolve),
    children: [
      {
        name: 'article-detail',
        path: ':articleId',
        component: resolve => require(['../../views/article/detail/index.vue'], resolve),
      },
    ],
  },
  {
    path: '/series',
    name: 'series',
    component: resolve => require(['../../views/series/index.vue'], resolve),
  },
]

export default routes
