import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//导入axios
import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
//路由守卫
router.beforeEach((to, from, next) => {
  //配置面包屑
  let data = sessionStorage.getItem('token')
  if (to.path == '/login') {
    if (data !== null) {
      next('/home');
    }
  } else {
    if (data == null) {
      return next('/login')
    }
  }

  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
