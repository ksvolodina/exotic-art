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

  siteBreakpoint: (state) => {
    const { width } = state

    if (!width) return null

    if (width < 480) return 'xs'

    if (width < 768) return 'sm'

    if (width < 1088) return 'md'

    if (width < 1280) return 'lg'

    return 'xl'
  },

  isDesktop: (state) => (state.width !== 0) && state.width >= 1280,
  isNotDesktop: (state) => (state.width !== 0) && state.width <= 1279,
  isMobileWidth: (state) => (state.width !== 0) && state.width < 768,
  isNotMobile: (state) => (state.width !== 0) && state.width >= 768,
  isWidthWithNav: (state) => (state.width !== 0) && state.width >= 1382,
  isWidthWithSidebar: (state) => (state.width !== 0) && state.width >= 1088,
}
