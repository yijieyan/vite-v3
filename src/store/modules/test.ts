const defaultState = {
  count: 0
}

export default {
  state() {
    return defaultState
  },
  mutations: {
    addCount(state: typeof defaultState) {
      state.count++
    },
    supCount(state: typeof defaultState) {
      state.count--
    }
  },
  actions: {
    addCount({ commit }: { commit: Function }) {
      commit('addCount')
    },
    supCount({ commit }: { commit: Function }) {
      commit('supCount')
    }
  }
}
