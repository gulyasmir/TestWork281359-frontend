<template>
  <div  class="login-page">
          <el-card
          class="login-card-dialog"
          shadow="always"
        >
          <h2>Авторизация</h2>

          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm">

            <el-form-item label="" prop="login">
              <el-input
                v-model="ruleForm.login"
                placeholder="Введите логин"
              ></el-input>
            </el-form-item>
            <el-form-item
              class="smallMarginBottom"
              label=""
              prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="Введите пароль"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                :loading="loading"
              >Войти</el-button>
            </el-form-item>

          </el-form>


        </el-card>

  </div>
</template>

<script>

export default {
  name: "login",
  data() {
    var checkLogin = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Пожалуйста введите логин'));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Пожалуйста введите пароль'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };

    return {
      loading:false,
      ruleForm: {
        pass: '',
        login: '',
        rememberMe:false
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],

        login: [
          { validator: checkLogin, trigger: 'blur' }
        ]
      }
    };
  },


  methods: {
    submitForm: function () {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          this.loading = true
          try {
            const formData = {
              email: this.ruleForm.login,
              password: this.ruleForm.pass,
            }

            let result =  await this.$store.dispatch('auth/login', formData)

            console.log('result', result)

            if (result) {
              this.$message.success('Добро пожаловать в панель управления!')

              this.$router.push('/index')

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

<style lang="scss" scoped >
.login-page {
  .login-card-dialog{
    width: 50%;
    margin: 10% auto;
  }
  h2 {
    font-weight: normal;
    text-align: center;
    padding: 15px;
  }
  .el-icon-loading{
    margin-top: 0;
    font-size: 20px;
    color:var( --color-base-text-aside);
  }

  .empty-logo {
    text-align: center;
    padding-bottom: 30px;
    height: 60px;
  }

  .login-page {
    padding-top: 50px;
  }

  .login-card-dialog {
    width: 350px;


    .el-button {
      width: 100%;
    }
  }

  .el-form-item__content {
    text-align: center;
  }

  .rememberMe, .restorePassword {
    text-align: center;
    margin: 0 auto;
  }

  .el-checkbox__input {

  }

  .el-checkbox__input .el-checkbox__inner {
    display: block;
    height: 20px;
    width: 20px;
    background-color: var(--color-bg-input);
  }

  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: var(--basecolor);
    border: none;
  }

  .el-checkbox.rememberMe.is-checked .el-checkbox__label {
    color: var(--basecolor);
  }

  .el-checkbox__input.is-checked .el-checkbox__inner::after {
    height: 15px;
    margin-left: 5px;
    font-weight: 400;
  }

  .el-form-item__content {
    text-align: center !important;
  }

  .restorePassword {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    color: var(--color-inversion);
  }

  .rememberMe .el-checkbox__label {
    font-size: 16px;
    line-height: 18.75px;
    font-style: normal;
    font-weight: 400;
    color: var(--color-inversion);
  }


  a {
    color: var(--color-base-text-aside);
  }

  .el-card {
    border: 1px solid var(--bg-color);
    background-color: var(--bg-color);
    color: var(--color-base-text-aside);
    transition: .3s;
  }

  .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  }

}

</style>
