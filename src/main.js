// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   //ES6模块导入方式
import App from './App'
import router from './router/router.js'
import "./assets/iconfont/iconfont.css"
//引入 vuex的js
import store from './store'
//引入ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//引入vue touch手势事件
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });

//引入vconsole
import Vconsole from 'vconsole'
const vConsole = new Vconsole()
Vue.use(vConsole)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


