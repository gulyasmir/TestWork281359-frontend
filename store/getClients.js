export const actions = {
  async getListClients(){
    try {
     const url=`https://directory.gulyasmir.ru/api/client`

      let resultdata = await this.$axios.get(url)

      console.log('getClients result', resultdata)
      return resultdata
    } catch(e){
      console.log('getClients store error')
      throw  e
    }
  }
}

