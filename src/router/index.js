import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ShopingCart from '../views/ShopingCart.vue'
import success from '../views/success.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/About',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/Product/:id',
    // props untuk memanggil id
    props: true,
    name: 'Product',
    component: Product
  },
  {
    path: '/ShopingCart',
    name: 'ShopingCart',
    component: ShopingCart
  },
  {
    path: '/success',
    name: 'success',
    component: success
  }
]


const router = new VueRouter({
  routes
})

export default router