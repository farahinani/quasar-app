
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageIntro.vue') },
      { path: '/home', component: () => import('src/pages/PageHome.vue') },
      { path: '/home/shake-and-win', component: () => import('src/pages/PageShakeWin.vue') },
      { path: '/test', component: () => import('src/pages/test.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
