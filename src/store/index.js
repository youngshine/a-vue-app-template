/**
 * Created by Joker on 2017/11/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    footerVisible: true
  },
  mutations: {
    [types.TOGGLE_FOOTER] (state) {
      state.footerVisible = !state.footerVisible
    }
  }
});
export default store
