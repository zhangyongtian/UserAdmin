import Vue from 'vue'
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/typo.css'
// 代码高亮
import '@/assets/prism.css'
import '@/assets/prism.js'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
