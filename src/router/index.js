import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =() => import ('../views/home/Home.vue')
const Cat = () => import ('../views/cat/Cat.vue')
const Profile = () => import ('../views/profile/Profile.vue')
const Shopcart = () => import ('../views/shopcart/Shopcart.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect: "/cat"
  },
  {
    path: '/home',
    component: Home
  },
   {
    path: '/cat',
    component: Cat
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
