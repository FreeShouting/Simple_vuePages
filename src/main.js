// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout.vue'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import DtailPage from './pages/detail'
import VueResource from 'vue-resource'
import DetailCou from './pages/details/count'
import DetailFor from './pages/details/forecast'
import DetailAna from './pages/details/analysis'
import DetailPub from './pages/details/public'
import OrderListPage from './pages/OrderList'

   Vue.use(VueRouter)
   Vue.use(VueResource)
    let router =new VueRouter({
    mode:'history',
    routes:[
      {
        path:'/',
        component:IndexPage
      },
      {
        path:'/orderList',
        component:OrderListPage
      },
      {
        path:'/detail',
        redirect:'/datail/analysis',
        component:DtailPage,
        children:[

          {
            path:'count',
            component:DetailCou
          },
          {
            path:'forecast',
            component:DetailFor
          },
          {
            path:'analysis',
            component:DetailAna
          },
          {
            path:'public',
            component:DetailPub
          },

        ]
      },

    ]
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: { layout },
})
