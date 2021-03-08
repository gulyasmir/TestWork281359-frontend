<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

      <el-menu-item
        index="3">Список пользователей
      </el-menu-item>

      <el-menu-item index="2">
        <a href="https://github.com/gulyasmir" target="_blank">Исходники тут</a>
      </el-menu-item>

      <el-menu-item
        v-if="this.isSetToken"
        index="2">Выйти
      </el-menu-item>

      <el-menu-item
        v-else
        index="1">Авторизоваться
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      activeIndex: '1'

    };
  },
  computed: {
    isSetToken(){
      return  this.$store.getters['auth/isAuthenticated']
    }
  },
  methods: {
    handleSelect(key, keyPath) {
     // console.log(key)
      if (key==='1') {
        this.$router.push('/login')
      }
      if (key==='2') {
        this.$router.push('/logout')
      }
      if (key==='3') {
        this.$router.push('/clients')
      }
    }
  }
}
</script>

<style >
.el-menu-demo {
  display: flex;
  justify-content: flex-end;
}

</style>
