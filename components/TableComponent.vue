<template>
  <div>
    <ModalDialog
    :dialogVisible="this.dialogVisible"
    :infoClient="this.infoClient"
    />

   <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="fio"
      label="ФИО"
      >
    </el-table-column>
    <el-table-column
      prop="email"
      label="Email"
   >
    </el-table-column>
    <el-table-column
      prop="phone"
      label="Телефон">
    </el-table-column>
    <el-table-column
      fixed="right"
      label=" "
      width="120">
      <template slot-scope="scope">
        <el-button @click="handleClickView(scope.row, tableData)"type="text" >
          <div class="el-icon-view"></div>
        </el-button>
        <el-button
          v-if="isSetToken"
          @click="handleClickEdit(scope.row.id, tableData)"  type="text" >
          <div class="el-icon-edit"></div>
        </el-button>
        <el-button
          v-if="isSetToken"
          @click="handleClickDelete(scope.row.id, tableData)" type="text">
          <div class="el-icon-delete"></div>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import ModalDialog from '@/components/ModalDialog'
import { MessageBox } from 'element-ui'
export default {
  name: "TableComponent",
  comments:{
    ModalDialog
  },
  props:{
    isSetToken: {
      type: Boolean,
      default() {
        return false;
      }
    },
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      dialogVisible:false,
      infoClient:{}
    }
  },
  methods: {
    handleClickView(info) {
      this.dialogVisible = true
      this.infoClient = info
    },
    handleClickEdit(id) {
      console.log('id', id)
    //  this.$message.warning('Нет доступа! Необходимо авторизоваться.')
      this.$router.push(`/clients/update/${id}`)
    },
    handleClickDelete(id) {
      // this.$message.warning('Нет доступа! Необходимо авторизоваться.')

      let alertMessage =  'Вы уверены, что хотите удалить этого пользователя?'
      MessageBox.alert(
        alertMessage,
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText:'Да'})
        .then(() => {
        //  window.location.href = (`/clients/delete/${id}`)
          this.$router.push(`/clients/delete/${id}`)
        })
    }
  }
}
</script>

<style scoped>

</style>
