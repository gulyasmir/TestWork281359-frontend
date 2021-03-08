<template>
  <div class="pade-update">
    <div class="icon el-icon-back"  @click="toBack"></div>
    <h1>Удаление данных о пользователе </h1>
    <div class="loading">
      <i class="el-icon-loading"></i>
    </div>

  </div>
</template>

<script>
import FormClients from '@/components/FormClients'
export default {
  name: "delete",
  layout:'empty',
  middleware:['ifAuth'],
  components:{
    FormClients
  },
  data(){
    return{
      idClients:this.$route.params.id
    }
  },
  beforeMount() {
    console.log('this.$route.params.id = ', this.$route.params.id)
    this.delete()
  },
  methods:{
    toBack(){
      this.$router.push('/clients')
    },
   async  delete(){
     try {
     let result =  await this.$store.dispatch('deleteClient/delete', {id:this.idClients})
      if (result.success === true){
        this.$message.success('Пользователь успешно удален!')
      } else {
        this.$message.warning('Нет доступа! Вам нужно авторизоваться.')
      }
       this.$router.push('/clients')
     } catch (e) {
        this.loading = false
        this.$message.warning('Что то пошло не так')
       this.$router.push('/clients')
       }
     }
  }
}
</script>

<style scoped>
h1{
  padding:25px 0;
}
.loading{
  text-align: center;
  width: 100%;
  padding: 30px;
}
.el-icon-loading{
  font-size: 45px;
  margin: 0 auto;
}
</style>
