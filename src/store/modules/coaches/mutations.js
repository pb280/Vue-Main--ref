const coachesMutations = {
  registerCoach (state, payload) {
    state.coaches.push(payload)
  }
}

export default coachesMutations
