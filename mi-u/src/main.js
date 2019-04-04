import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import store from '../store/index.js'

import qs from 'qs' // 引入 node中自带的qs模块（对application/x-www-form-urlencoded数据格式转换）
import { getItemList, getItemInfo } from './api/axios.js'  // 导入 封装的请求函数


/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
  store,
  router,
  qs,
  getItemList,
  getItemInfo
})
