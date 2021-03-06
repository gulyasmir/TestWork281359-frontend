<template>
  <div>
    <ModalDialog
    :dialogVisible="this.dialogVisible"
    :infoClient="this.infoClient"
    />

   <el-table
    :data="this.tableData"
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
        <el-button  @click="handleClickEdit"  type="text" >
          <div class="el-icon-edit"></div>
        </el-button>
        <el-button  @click="handleClickDelete" type="text">
          <div class="el-icon-delete"></div>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import ModalDialog from '@/components/ModalDialog'
export default {
  name: "TableComponent",
  comments:{
    ModalDialog
  },
  props:{
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
    handleClickEdit() {
    //  this.$message.warning('Нет доступа! Необходимо авторизоваться.')
      this.$router.push('/clients/update')
    },
    handleClickDelete() {
      // this.$message.warning('Нет доступа! Необходимо авторизоваться.')
      this.$router.push('/clients/delete')
    }
  }
}
</script>

<style scoped>

</style>
