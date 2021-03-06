export const state = () =>({
  error:null
})

export const actions ={
  nuxtServerInit({dispatch}){
 //   console.log('server init')
    dispatch('auth/autoLogin')
  }
}
export const mutations = {
  setError(state, error)  {
    state.error = error
  },
  clearError(state)  {
    state.error = null
  },
  setToken(state, token) {
    state.token = token
  },
  clearToken(state)  {
    state.token = null
  }
}

export const getters = {
  error:state =>state.error,
  isAuth:state => !!state.token,
  today: state => state.today

}

