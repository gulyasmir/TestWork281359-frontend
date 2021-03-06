<template>
  <div class="page-clients">
    <h1>Список клиентов</h1>

    <el-button
      type="primary"
      @click="handleClickCreate"
    >
      Добавить пользователя
    </el-button>
    <TableComponent
      :tableData="this.clientsList.data"
    />

  </div>
</template>

<script>
import TableComponent from '@/components/TableComponent'
export default {
  layout:'empty',
  comments:{
    TableComponent
  },
  data(){
    return {
      clientsList: []
    }
  },
  mounted(){
    this.getClientslist()
  },
  methods:{
    async getClientslist() {
        this.clientsList = []
        this.clientsList =  await this.$store.dispatch('getClients/getListClients' )

      return this.clientsList
    },
    handleClickCreate() {
      // this.$message.warning('Нет доступа! Необходимо авторизоваться.')
      this.$router.push('/clients/create')
    },
  }
}
</script>

<style scoped>

</style>
