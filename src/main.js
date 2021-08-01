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

import store from './store/index'
new Vue({
	router,
  store,
  render: h => h(App),
}).$mount('#app')
