export const state = () => ({
  width: 0,
})

export const mutations = {
  setWidth(state, width) {
    state.width = width
  },
}

export const actions = {
  setSiteWidth({ commit }) {
    if (!document) return
    commit('setWidth', window.innerWidth)
  },
}

export const getters = {
  siteWidth: (state) => state.width,
  widthSmall: (state) => (state.width !== 0) && state.width > 767,
}
