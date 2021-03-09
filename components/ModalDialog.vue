<template>
  <div class="modalDialog">
    <el-dialog
      title="Информация о пользователе"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      <p class="title"> <span class="el-icon-user"></span> {{infoClient.fio}} </p>
      <p><span class="el-icon-message"></span>  {{infoClient.email}}</p>
      <p><span class="el-icon-phone-outline"></span>  {{infoClient.phone}}</p>
      <p><span class="el-icon-time"></span> Запись создана  {{infoClient.created_at}}</p>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Закрыть</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ModalDialog",
  props:{
    dialogVisible:{
      type: Boolean,
      default: false
    },
    infoClient:{
      type:Object,
      default: {}
    }
  },
  methods:{
    handleClose(){
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modalDialog {
  p {
    padding: 10px;
    font-size: 16px;

    span {
      padding-right: 15px;
    }
  }
  .title {
    font-size: 18px;
    font-weight: bolder;
  }
}
</style>
