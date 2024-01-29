import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('@/views/main/index')
  },
  {
    path:'/menu',
    component:()=>import('@/views/category/index')
  },
  {
    path:'/detail',
    component:()=>import('@/views/detail/index')
  },

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
