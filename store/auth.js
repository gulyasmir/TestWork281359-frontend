export const actions = {
  async login({commit},payload){
    try {
      const url=`http://directory.gulyasmir.ru/public/api/login`
      // const url=`http://directory/api/client`
      const resultdata = await this.$axios.post(url, payload)
      console.log('login result', resultdata)
      return resultdata
    } catch(e){
      console.log('login error')
      throw  e
    }
  }
}

