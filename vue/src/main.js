import Vue from 'vue'

/* ( there may be other imports here ) */
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
/* ( there may be other imports here ) */


import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({routes: routes, mode: "history"});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
