// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入axios
import axios from 'axios';
axios.defaults.baseURL ="http://47.100.124.50:8080/";
axios.defaults.headers['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials=true;

Vue.prototype.$http = axios;


//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;
Vue.use(ElementUI);

import moment from 'moment'
Vue.filter('dateformat',function (dataStr,pattern ='YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
