export const actions = {
  async getClientInfo({commit}, payload){
    try {
      const url=`http://directory.gulyasmir.site/api/client/${payload.id}`

      let resultdata = await this.$axios.get(url)

      console.log('getClientInfo result', resultdata.data)
      return resultdata.data
    } catch(e){
      console.log('getClientInfo store error')
      throw  e
    }
  }
}

