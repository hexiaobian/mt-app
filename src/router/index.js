import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default.vue'
import Blank from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import goodsList from '@/page/goodsList.vue'
import changeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'




Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default,
      redirect: 'index',
      children: [
        {
        path: 's/:name',
        name: 'goods',
        component: goodsList
        },
        {
        path: 'index',
        name: 'index',
        component: Index
        },
        {
          path: "changeCity",
          name: "changeCity",
          component:changeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'Blank',
      component: Blank,
      children: [
        {
          path: 'login',
          name: "login",
          component:Login
        },
        {
          path: 'register',
          name: "register",
          component:Register
        }
      ]

    }
  ],
  mode: 'history',
})
