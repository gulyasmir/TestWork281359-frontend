<template>
  <div>
    <div class="icon el-icon-back"  @click="toBack"></div>
      <h1>Добавление новых пользователей</h1>
      <FormClients
        typePage="create"
      />

  </div>
</template>

<script>
import FormClients from '@/components/FormClients'
export default {
name: "create",
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

</style>
