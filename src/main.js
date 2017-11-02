// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import VueResource from 'vue-resource'
Vue.use(VueResource);

//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('@/assets/default_pic.jpg')
})

import Vuex from 'vuex';
Vue.use( Vuex )

import store from './store/'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
