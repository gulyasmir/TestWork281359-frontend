import Cookie from 'cookie'
import Cookies from 'js-cookie'
import  jwtDecode from 'jwt-decode'


export const state = () =>({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    // console.log('state.token', state.token)
  },
  clearToken(state) {
    state.token = null
  },
  setUserId(state, userid) {
    state.userid = userid
  }
}

export const actions = {
  async login({commit},payload){
    try {
      const url=`https://directory.gulyasmir.ru/public/api/login?email=${payload.email}&password=${payload.password}`
      // const url=`http://directory/api/client`
      const resultdata = await this.$axios.post(url)
      console.log('login result', resultdata)


     // const token = loginReport.access_token
    //  if (loginReport.success) {
    //    dispatch('setToken', token)
     //   dispatch('setUserId', loginReport.userid)

     //   return true
    //  }
   //   return false


      return resultdata
    } catch(e){
      console.log('login error')
      throw  e
    }
  },
  setToken({commit}, token){
    this.$axios.setToken(token, 'toke')
    commit('setToken', token)
    Cookies.set('jwt-token', token)
  },
  setUserId({commit}, userId){
    commit('setUserId', userId)
    Cookies.set('userId', userId)
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



