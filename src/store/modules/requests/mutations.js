const requestsMutations = {
  addRequest (state, payload) {
    state.requests.push(payload)
  }
}

export default requestsMutations
