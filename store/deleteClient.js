export const actions = {
  async delete({commit}, payload){
    try {
      const url=`https://directory.gulyasmir.ru/public/api/client/${payload.id}`
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

