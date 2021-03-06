export const actions = {
  async update({commit}, payload){
    try {
      const url=`http://directory/api/client/${payload.id}?fio=${payload.fio}&email=${payload.email}&phone=${payload.phone}}`
      const resultdata = await this.$axios.put(url)
      console.log('getClients result', resultdata)
      return resultdata
    } catch(e){
      console.log('getClients error')
      throw  e
    }
  }
}

