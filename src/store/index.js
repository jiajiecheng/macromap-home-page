import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow:true
  },
  getters: {
  },
  mutations: {
    show(state){
      state.isShow = true
    },
    hidden(state){
      state.isShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
