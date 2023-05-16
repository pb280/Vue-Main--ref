const coachesActions = {
  registerCoach (context, data) {
    const registerData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    }
    // fetch('https://vue-demo-c39e0-default-rtdb.firebaseio.com/coaches.json', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(registerData)
    // })
    context.commit('registerCoach', registerData)
  }
}

export default coachesActions
