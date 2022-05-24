const routes = [
  {
    path: '/api_design',
    component: () => import('./pages/api/index.vue')
  },
  {
    path: '/apis',
    component: () => import('./pages/api/preview.vue')
  },
  {
    path: '*',
    redirect: '/api_design'
  }
]
export default routes
