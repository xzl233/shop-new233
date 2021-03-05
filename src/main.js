import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 解决移动端三百毫秒的延迟
import FastClick from "fastclick";

// 图片的懒加载
import VueLazyLoad from 'vue-lazyload'

import 'amfe-flexible' 

// import Vue from './vue'
// Vue.prototype.$bus = new Vue()   


createApp(App).use(store).use(router).mount('#app')

// 解决移动端三百毫秒的延迟
FastClick.attach(document.body) 