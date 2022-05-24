/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import TDesign from 'tdesign-vue';
import routes from './routes';
import App from './App.vue';

// import tdesign style;
import 'tdesign-vue/es/style/index.css';


Vue.use(TDesign);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
});
