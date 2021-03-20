import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home,
    component: () => import('../views/Home.vue'),
    meta: { title: 'Herzlich Willkommen!' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'Über uns' }
  },
  {
    path: '/bird-stock',
    name: 'Vogelbestand',
    component: () => import('../views/BirdStock.vue'),
    meta: { title: 'Vogelbestand' }
  },
  {
    path: '/lining',
    name: 'Futter',
    component: () => import('../views/Lining.vue'),
    meta: { title: 'Futter' }
  },
  {
    path: '/information',
    name: 'Informationen',
    component: () => import('../views/Information.vue'),
    meta: { title: 'Informationen' }
  },
  {
    path: '/fotos',
    name: 'Fotos',
    component: () => import('../views/Fotos.vue'),
    meta: { title: 'Fotos' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: { title: 'Kontakt und Anfahrt' }
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/Links.vue'),
    meta: { title: 'Links' }
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue'),
    meta: { title: 'Impressum' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + 'Falkennest - das Hobbyzucht'

  next()
})

export default router
