<template>
  <div class="formClients">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm">

      <el-form-item label="" prop="fio">
        <el-input
          type="text"
          v-model="ruleForm.fio"
          placeholder="Введите ФИО"
        ></el-input>
      </el-form-item>
      <el-form-item
        class="smallMarginBottom"
        label=""
        prop="email">
        <el-input
          type="email"
          v-model="ruleForm.email"
          autocomplete="off"
          placeholder="Введите email"
        ></el-input>
      </el-form-item>

      <el-form-item
        class="smallMarginBottom"
        label=" "
        prop="phone">
        <el-input
          type="phone"
          v-model="ruleForm.phone"
          autocomplete="off"
          placeholder="Введите телефон"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <div class="saveButton">
          <el-button
            type="success"
            @click="toBack"
          >Назад</el-button>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            :loading="loading"
          >Сохранить</el-button>
        </div>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "FormClientsCreate",
  props:{
    idClients:{
      type:String,
      default: ''
    }
  },
  data() {
    var checkFio = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Пожалуйста введите ФИО'));
      }
      callback();
    };

    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Пожалуйста введите телефон'));
      }
      callback();
    };
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Пожалуйста введите Email'));
      } else {
        if (this.ruleForm.checkEmail !== '') {
          this.$refs.ruleForm.validateField('checkEmail');
        }
        callback();
      }
    };

    return {
      loading:false,
      ruleForm: {
        fio: '',
        email: '',
        phone: '',
        rememberMe:false
      },
      rules: {
        fio: [
          { validator: checkFio, trigger: 'blur' }
        ],
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ]
      }
    };
  },

  methods: {
    toBack(){
      this.$router.push('/clients')
    },
    submitForm: function () {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          this.loading = true
          try {
            let formData = {
                fio: this.ruleForm.fio,
                email: this.ruleForm.email,
                phone: this.ruleForm.phone
              }
              console.log('formData', formData)
            let result =  await this.$store.dispatch('saveClient/create', formData)

            if (result.error=== true){
              this.loading = false
              this.$message.warning('Нет доступа! Вам нужно авторизоваться.')
            }
            else {
              this.$message.success('Добро пожаловать в панель управления!')
            }
            this.$router.push('/clients')

          } catch (e) {
            this.loading = false
          }

        } else {

          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
}
</script>

<style scoped>
.formClients{
  width: 50%;
  margin: 0 auto;
}
</style>
