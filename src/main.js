import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/iconfont.css'
import axios from 'axios';
import VueResource from 'vue-resource'
import './permission.js'
import store from './store'

Vue.use(ElementUI);

Vue.prototype.axios = axios;
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


