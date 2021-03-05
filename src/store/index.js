import { createStore } from 'vuex'

import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from './getters.js'

export default createStore({
  state: {
    carList:[]
  },
  // view 通过 mutations 修改 vuex里state的唯一方法
  mutations,
  actions,
  getters,
  modules: {
 
    }
})
 