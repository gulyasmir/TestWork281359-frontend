import Cookie from 'cookie'
import Cookies from 'js-cookie'
import  jwtDecode from 'jwt-decode'


export const state = () =>({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
     console.log('state.token', state.token)
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({commit, dispatch}, payload) {
    try {
      const url=`http://directory.gulyasmir.site/api/login?email=${payload.email}&password=${payload.password}`
      const resultdata = await this.$axios.post(url)
      console.log('login result', resultdata.data)
      const token = resultdata.data.token
      if (resultdata.data.success) {
        dispatch('setToken', token)
        return true
     }
      return false
    } catch(e){
      console.log('login error')
      throw  e
    }
  },
  setToken({commit}, token){
    this.$axios.setToken(token, 'token')
    commit('setToken', token)
    Cookies.set('jwt-token', token)
  },

  logout({commit}){
    this.$axios.setToken(false)
    commit('clearToken')

    Cookies.set('jwt-token', null)
    Cookies.set('userId', null)
  },

  autoLogin({dispatch}){
    let cookieStr
    if (process.client) {
      cookieStr = document.cookie
    } else {
      cookieStr = this.app.context.req.headers.cookie
    }
    //  console.log('cookieStr', cookieStr)
    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']
    // console.log('  token = ', token)

    if (isJWTValid(token)){
      // console.log('OK!!!!')
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token),
  token: state => state.token
}

function isJWTValid(token){
  if(!token) {
    return false
  }
  if(token==='null') {
    return false
  }
  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0

  return (new Date().getTime()/1000) < expires

}



