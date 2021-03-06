export const actions = {
  async getListClients(){
    try {
     const url=`https://directory.gulyasmir.ru/public/api/client`
    //  const url=`http://directory/api/client`
      let resultdata = await this.$axios.get(url)
     // console.log('getClients result', resultdata)

     // let resultdata =  {'data':
 //         [{"id":1,"fio":"\u041a\u0430\u043b\u0438\u043d\u0438\u043d \u041c\u0430\u043a\u0441\u0438\u043c \u0415\u0432\u0441\u0435\u0435\u0432\u0438\u0447","email":"kalinin@gmail.ru","phone":"+7(999)976-66-44","created_at":"2021-03-05 00:00:00","updated_at":"2021-03-05 00:00:00"},{"id":2,"fio":"\u0418\u0433\u043d\u0430\u0442\u043e\u0432 \u0413\u0443\u0440\u0438\u0439 \u0421\u0442\u0435\u043f\u0430\u043d\u043e\u0432\u0438\u0447","email":"trsg@mail.ru","phone":"+7(976)776-87-22","created_at":"2021-03-05 13:42:26","updated_at":"2021-03-05 13:42:26"},{"id":3,"fio":"\u041c\u0430\u0440\u043a\u043e\u0432 \u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u0412\u0441\u0435\u0432\u043e\u043b\u043e\u0434\u043e\u0432\u0438\u0447","email":"markov@yandex.ru","phone":"+7(876)865-34-23","created_at":"2021-03-05 13:52:26","updated_at":"2021-03-05 13:52:26"}]
   //   };
      console.log('getClients result', resultdata)
      return resultdata
    } catch(e){
      console.log('getClients store error')
      throw  e
    }
  }
}

