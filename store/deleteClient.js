export const actions = {
  async delete({commit}, payload){
    try {
      const url=`http://directory.gulyasmir.site/api/client/${payload.id}`
      console.log('delete url', url)
      const resultdata = await this.$axios.delete(url)
      console.log('delete result', resultdata.data)
      return resultdata.data
    } catch(e){
      console.log('delete error')
      throw  e
    }
  }
}

