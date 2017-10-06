import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      title: null
    },

    actions: {},

    mutations: {
      title: (state, payload) => {
        state.title = payload
      }
    },

    getters: {
      title: state => state.title
    }
  })
}
