export const actions = {
  async create({commit}, payload){
    try {
      const url=`https://directory.gulyasmir.ru/api/client?fio=${payload.fio}&email=${payload.email}&phone=${payload.phone}`
      const resultdata = await this.$axios.post(url)
      console.log('create result', resultdata.data)
      return resultdata.data
    } catch(e){
      console.log('create error')
      throw  e
    }
  }
}

