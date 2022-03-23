export const actions = {
  async update({commit}, payload){
    try {
      const url=`http://directory.gulyasmir.site/api/client/${payload.id}?fio=${payload.fio}&email=${payload.email}&phone=${payload.phone}`
      const resultdata = await this.$axios.put(url)
      console.log('update result', resultdata.data)
      return resultdata.data
    } catch(e){
      console.log('update error')
      throw  e
    }
  }
}

