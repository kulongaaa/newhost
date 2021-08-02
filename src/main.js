import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import axios from "axios"
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false


import VueCron from 'vue-cron'
Vue.use(VueCron);//使用方式：<vueCron></vueCron>

import store from './store/index'
new Vue({
	router,
  store,
  render: h => h(App),
}).$mount('#app')
