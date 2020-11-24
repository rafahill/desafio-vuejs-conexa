import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login/login';
import shared from './modules/shared/shared';
import schedule from './modules/schedule/schedule';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    shared,
    schedule
  }
})
