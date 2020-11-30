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

import '@/assets/icon/zanglikes/zanglikes.css'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false
// 创建一个中央的事件总线
Vue.prototype.$event = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
