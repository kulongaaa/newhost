import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/ku',
    name: 'ku',
     component: () => import('../components/index/ku.vue')
  },
  {
    path: '/login',
    name: 'login',
     component: () => import('../components/index/login.vue')
  },
  {
    path: '/register',
    name: 'register',
     component: () => import('../components/index/register.vue')
  },
  {
    path: '/',
    name: 'login',
     component: () => import('../components/index/login.vue')
  },
  {
    path: '/echarts4a',
    name: 'echarts4a',
     component: () => import('../components/rw/echarts4a.vue')
  },
  {
    path:'/network',
    name:'network',
    component:() =>import('../components/network/network')
  },
  {
    path:'/clock',
    name:'clock',
    component:() =>import('../components/system/clock')
  },
  {
    path:'/preserve',
    name:'preserve',
    component:() =>import('../components/system/preserve')
  },
  {
    path:'/echarts3a1',
    name:'echarts3a1',
    component:() =>import('../components/xtgj/echarts3a1')
  },
  {
    path:'/storage',
    name:'storage',
    component:() =>import('../components/system/storage')
  },
]

const router = new VueRouter({
  routes
})


router.beforeEach((to,from,next) => {

    if (to.path === '/login'||to.path === '/register') {
      next()
  } else {
      if (localStorage.getItem('kulong-m-user') != undefined) {
       
          next();
      } else {
          next('/login');
      }
    }
    //如果存在就执行下一步
});



export default router
