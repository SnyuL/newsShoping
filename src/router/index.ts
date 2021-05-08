import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Member from '@/views/Member.vue'
import Cart from '@/views/Cart.vue'
import Search from '@/views/Search.vue'
import NewsList from '@/views/New/NewList.vue'
import NewsInfo from '@/views/New/NewsInfo.vue'
import PhotoList from '@/views/photo/PhotoList.vue'
import PhotoInfo from '@/views/photo/PhotoInfo.vue'
import GoodList from '@/views/good/GoodList.vue'
import GoodInfo from '@/views/good/GoodInfo.vue'
import GoodDesc from '@/views/good/GoodDesc.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => Home,
  },
  {
    path: "/Member",
    component: () => Member
  },
  {
    path: "/Cart",
    component: () => Cart
  },
  {
    path: "/Search",
    component: () => Search
  },
  {
    path: "/NewsList",
    component: () => NewsList
  },
  {
    path: "/NewsInfo/:id",
    component: () => NewsInfo,
    //Vue3.0中获取动态路由参数，需要加props:true
    props: true
  },
  { 
    path: '/PhotoList', 
    component: () => PhotoList,
  },
  {
    path: "/photoInfo/:id",
    component: () => PhotoInfo,
    //Vue3.0中获取动态路由参数，需要加props:true
    props: true
  },
  {
    path: "/goodList",
    component: () => GoodList,
  },
  {
    path: "/goodInfo/:id",
    component: () => GoodInfo,
    props:true
  },
  { 
    path: '/goodDesc/:id', 
    component:GoodDesc, 
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
