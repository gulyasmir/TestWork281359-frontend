export const actions = {
  async getListClients(){
    try {
     const url=`http://directory.gulyasmir.site/api/client`

      let resultdata = await this.$axios.get(url)

      console.log('getClients result', resultdata)
      return resultdata
    } catch(e){
      console.log('getClients store error')
      throw  e
    }
  }
}

