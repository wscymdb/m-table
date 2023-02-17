import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JsonView from '../views/JsonView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/json',
    name: 'json',
    component: JsonView,
  },
]

const router = new VueRouter({
  routes,
})

export default router
