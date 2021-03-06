<template>
  <div>
    <h1>Настройки</h1>
    <p>Здесь  переключение со светлой темы на темную</p>
    <el-button
      type="primary"
      @click="changeTheme('light_theme')"
    >Светлая тема</el-button>


    <el-button
      @click="changeTheme('dark_theme')"
    >Темная тема</el-button>


  </div>
</template>

<script>
export default {
  name: "setting",
  layout:'admin',
  middleware:['admin-auth'],
  methods:{
     changeTheme(nameTheme){
      document.body.className = nameTheme;
    }
  }
}
</script>

<style scoped>

</style>
