<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Авторизоваться</el-menu-item>
      <el-menu-item index="2"><a href="https://github.com/gulyasmir" target="_blank">Исходники тут</a></el-menu-item>
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
  methods: {
    handleSelect( ) {
      this.$router.push('/login')
    }
  }
}
</script>

<style >
.el-menu--horizontal>.el-menu-item {
  float: right;
}
</style>
