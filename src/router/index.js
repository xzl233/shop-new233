// 1.导入并使用路由
import { createRouter, createWebHistory } from 'vue-router'

// 导入路由地址
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cat = () => import('../views/cat/Cat.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')
 
// 
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home,
    meta: {
      keepAlive : true 
    },
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/cart',
    component: Cat
  },
  { 
    path:'/profile',
    component: Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
] 

// 2.创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 3.导出路由
export default router
