import Vue from 'vue'
import VueRouter from 'vue-router'
 
import App from './App.vue'
import List from './components/ProductList.vue'
import Index from './components/AddProduct.vue'
 
Vue.use(VueRouter)
 
Vue.config.productionTip = false
 
const routes = [
  {
    name: 'List',
    path: '/list',
    component: List
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
];
 
const router = new VueRouter({ mode: 'history', routes: routes })
 
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')