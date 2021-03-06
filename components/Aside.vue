<template>
  <el-row>
    <el-col>
      <el-menu
  router
  default-active="2"
         class="el-menu-vertical-demo"
         :collapse="isCollapse">

  <el-menu-item index="/start">
    Панель управления
  </el-menu-item>


  <el-menu-item index="/clients" >
    <i class="el-icon-s-data"></i>
    <span slot="title">Смотреть всех пользователей</span>
  </el-menu-item>

  <el-menu-item index="/setting">
    <i class="el-icon-setting"></i>
    <span slot="title">Настройки</span>
  </el-menu-item>

  <el-menu-item index="/logout">
    <i class="el-icon-user"></i>
    <span slot="title">Выйти</span>
  </el-menu-item>

  <el-radio-group v-model="isCollapse" >
    <el-radio-button :label="true" >Закрыть</el-radio-button>
    <el-radio-button :label="false">Открыть</el-radio-button>
  </el-radio-group>

</el-menu>
    </el-col>
  </el-row>
</template>

<script>


export default {
  name: "Aside",

  data() {
    return {
      isCollapse: true
    }
  }
}
</script>

<style lang="scss" >
.el-menu-vertical-demo{
  height: 100%;
  min-height: 100vh;
  background: var(--basecolor-aside);
}

.el-menu {
  min-width: 65px;
}
.el-radio-group{
  position: fixed;
  bottom: 0;
  left:0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 290px;
}
.el-radio-button.is-active{
  display: none;
}
.el-radio-button__inner{
  padding: 12px 5px;
  border-radius: 0;
  width:100%;
}
.el-radio-button__inner{
  padding: 12px 5px!important;
}

.button-close{
  float: right;
}
.el-submenu__title, .el-menu-item,  .el-aside i, .el-aside{
  color:var(--color-base-text-aside);
}
.el-submenu.is-opened .el-menu,
.el-submenu .el-menu {
  background: var(--basecolor-aside);
  color:var(--color-base-text-aside);
}
.el-submenu  .el-menu.is-active,
.el-menu-item.is-active{
  background: var(--bg-aside-hover);
  color:var(--color-active-text-aside);
}
.el-menu-item:hover,
.el-submenu__title:hover {
  background: var(--bg-aside-hover);
  color:var(--color-active-text-aside);
}

.el-radio-button .el-radio-button__inner,
.el-radio-button .el-radio-button__inner:hover,
.el-radio-button .el-radio-button__inner:active,
.el-radio-button .el-radio-button__inner:focus,
.el-radio-button .el-radio-button__inner.active
{
  background: var(--basecolor-aside);
  color:var(--color-active-text-aside);
  border:none;
}
.el-radio-button:first-child .el-radio-button__inner,
.el-radio-button:first-child .el-radio-button__inner:hover,
.el-radio-button:first-child .el-radio-button__inner:active,
.el-radio-button:first-child .el-radio-button__inner:focus,
.el-radio-button:first-child .el-radio-button__inner.active {
  border-left: none;
  background: var(--basecolor-aside);
  color:var(--color-active-text-aside);
}
.el-menu {
  border-right: solid 1px var(--bg-input);
}

</style>


