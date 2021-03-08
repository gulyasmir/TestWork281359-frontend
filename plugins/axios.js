export default function ({$axios, redirect, store}){
  $axios.interceptors.request.use(request =>{
   if (store.getters['auth/isAuthenticated'] && !request.headers.common.Authorization){
      const token = store.getters['auth/token']
      request.headers.common.Authorization = `Bearer ${token}`
  }
   console.log('request.headers', request.headers)
    return request
  })

  $axios.onError(error =>{
    if (error.response){
      console.log('error.response.status', error.response.status)
      if (error.response.status === 401) {
        redirect('/login?message=session')
        store.dispatch('auth/logout')
      }
      if (error.response.status === 403) {
        console.log('error.response ', error.response)
      }
      if (error.response.status === 500) {
        console.error('Server 500 error')
        redirect('/error')
      }
    }
  })
}
