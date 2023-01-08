/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import TDesign from 'tdesign-vue';
import routes from './routes';
import App from './App.vue';

// import tdesign style;
import 'tdesign-vue/es/style/index.css';

Vue.use(VueRouter);
Vue.use(TDesign);

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
