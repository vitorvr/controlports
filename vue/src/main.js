import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({routes: routes, mode: "history"});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
