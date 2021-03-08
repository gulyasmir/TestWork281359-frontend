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
        label=""
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
  name: "FormClients",
  props:{
    idClients:{
      type:String,
      default: ''
    },
    typePage:{
      type:String,
      default:'create'
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
    submitForm: function () {
    //  console.log('this.ruleForm.phone', this.ruleForm.phone)
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          this.loading = true
          try {
            let result
            let formData
            if (this.typePage==='create') {
               formData = {
                fio: this.ruleForm.fio,
                email: this.ruleForm.email,
                phone: this.ruleForm.phone
              }
              console.log('formData', formData)
              result =  await this.$store.dispatch('saveClient/create', formData)
            } else {
               formData = {
                fio: this.ruleForm.fio,
                email: this.ruleForm.email,
                phone: this.ruleForm.phone,
                id:this.idClients
              }
              console.log('formData', formData)
              result =  await this.$store.dispatch('updateClient/update', formData)
            }


            console.log('result', result)

            if (result) {
              this.$message.success('Добро пожаловать в панель управления!')
              this.$router.push('/clients')

            } else {
              this.loading = false
              this.$message.warning('Нет доступа! Проверьте правильность логина и  пароля')
            }


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
