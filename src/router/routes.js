
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageIntro.vue') },
      { path: '/home', component: () => import('src/pages/PageHome.vue') },
      { path: '/shake-and-win', component: () => import('src/pages/PageShakeWin.vue') },
      { path: '/prizes', component: () => import('src/pages/PagePrizes.vue') },
      { path: '/collect-prizes', component: () => import('src/pages/PageCollectPrizes.vue') },
      { path: '/auto-close-popup', component: () => import('src/pages/PageAutoClosePopup.vue') },
      { path: '/inventory', component: () => import('src/pages/PrizeInventory.vue') },
      { path: '/inventory-updated', component: () => import('src/pages/PrizeInventory-updated.vue') },

      { path: '/test', component: () => import('src/pages/test.vue') },
      { path: '/test2', component: () => import('src/pages/test2.vue') },
      { path: '/test3', component: () => import('src/pages/test3.vue') },
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
