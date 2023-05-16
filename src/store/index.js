import { createStore } from 'vuex'

import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

import coachesModule from './modules/coaches'
import requestsModule from './modules/requests'

const store = createStore({
  modules: { coaches: coachesModule, requests: requestsModule },
  state () {
    return {
      userId: 'c3'
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
})

export default store
