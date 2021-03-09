export const actions = {
 getClientPlaceholder(){
      const resultdata = {
        "fio":"Введите ФИО",
        "email":"Введите email",
        "phone":"Введите телефон"
      }
      console.log('getClientPlaceholder result', resultdata)
      return resultdata
  }
}

