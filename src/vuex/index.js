import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    position:"北京"
  },
  mutations: {
    changeCity(state, position) {
      state.position = position
    }
  },
  actions: {
    changeCity(context,position) {
      context.commit('changeCity',position)
    }
  }
})