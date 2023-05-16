import requestsActions from './actions'
import requestsGetters from './getters'
import requestsMutations from './mutations'

const requestsModule = {
  namespaced: true,
  state () {
    return {
      requests: []
    }
  },
  mutations: requestsMutations,
  actions: requestsActions,
  getters: requestsGetters
}

export default requestsModule
