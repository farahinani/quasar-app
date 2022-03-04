
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageIntro.vue') },
      { path: '/home', component: () => import('src/pages/PageHome.vue') },
      { path: '/home/shake-and-win', component: () => import('src/pages/PageShakeWin.vue') },
      { path: '/home/shake-and-win-ios', component: () => import('src/pages/PageShakeWinIos.vue') },
      { path: '/home/shake-and-win-android', component: () => import('src/pages/PageShakeWinAndroid.vue') },
      { path: '/home/shake-and-win/animation', component: () => import('src/pages/PageAnimation.vue') },
      { path: '/home/shake-and-win/prizes', component: () => import('src/pages/prizes.vue') },
      { path: '/home/shake-and-win/prizes/collect-prizes', component: () => import('src/pages/collect-prizes.vue') },
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
