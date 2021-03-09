<template>
  <div class="page-clients">
    <h1>Список клиентов</h1>

    <el-button
      v-if="this.isSetToken"
      type="primary"
      @click="handleClickCreate"
    >
      Добавить пользователя
    </el-button>
    <TableComponent
      :tableData="this.clientsList.data"
      :isSetToken="this.isSetToken"
      :isLoading="this.isLoading"
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
      clientsList: [],
      isLoading: true
    }
  },
  created(){
    this.getClientslist()
  },
  computed: {
    isSetToken(){
      return  this.$store.getters['auth/isAuthenticated']
    }
  },
  methods:{
    async getClientslist() {
        this.clientsList = []
        this.clientsList =  await this.$store.dispatch('getClients/getListClients' )
        this.isLoading = false
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
