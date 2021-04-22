import { createStore } from 'vuex'
import test from './modules/test'

const store = createStore({
  modules: {
    test
  },
  getters: {
    getCount(state: any) {
      return state.test.count * 2
    }
  }
})

export default store
