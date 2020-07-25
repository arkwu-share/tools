
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/scan', component: () => import('pages/Scan.vue') },
      { path: '/decrypt', component: () => import('pages/Decrypt.vue') },
      { path: '/qr', component: () => import('pages/QrCode.vue') },
      { path: '/error', component: () => import('pages/Error404.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
