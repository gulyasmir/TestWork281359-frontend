<template>
  <div class="pade-update">
    <div class="icon el-icon-back"  @click="toBack"></div>
    <h1>Изменить данные о пользователе </h1>
    <FormClients
      typePage="update"
    />

  </div>
</template>

<script>
import FormClients from '@/components/FormClients'
export default {
  name: "update",
  layout:'empty',
  components:{
    FormClients
  },
  methods:{
    toBack(){
      this.$router.push('/clients')
    }
  }
}
</script>

<style scoped>
h1{
  padding:25px 0;
}
</style>
