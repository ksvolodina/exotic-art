import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    width: 0,
  }),
  getters: {
    siteWidth: (state) => state.width,
    smallScreen: (state) => (state.width !== 0) && state.width <= 767,
  },
  mutations: {
    setWidth(state, width) {
      state.width = width
    },
  },
  actions: {
    setSiteWidth({ commit }) {
      if (!document) return
      commit('setWidth', window.innerWidth)
    },
  },
  // modules: {
  // }
})
