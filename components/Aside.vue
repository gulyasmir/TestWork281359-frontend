<template>
  <el-row>
    <el-col>

<el-menu
  router
  default-active="2"
         class="el-menu-vertical-demo"
         :collapse="isCollapse">

  <el-menu-item index="/start">
    <img class="logo_aside" :src="logourl" alt="">
  </el-menu-item>

  <el-menu-item index="/start">
    <i class="el-icon-location"></i>
    <span slot="title">
    <el-select v-model="value"  @change="changeSelectFilial" placeholder="Выбор филиала">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
   </el-select>
   </span>
  </el-menu-item>

  <el-menu-item index="/start" >
    <i class="el-icon-s-data"></i>
    <span slot="title">Статистика</span>
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

import Cookies from "js-cookie";

export default {
  name: "Aside",
  methods: {
    changeSelectFilial(id) {
      if (id === '2fa15055-d0f7-ea11-a2dc-005056844c9d'){
        this.$router.push(`/filial/achinsk`)
      } else {
        this.$router.push(`/customFilial/${id}`)
      }
    }
  },

  data() {
    return {
      logourl:require('@/static/img/logo-white.svg'),
      isCollapse: true,
      options: [{
        value: 'a458b9e8-b16b-e411-9304-00059a3c7a00',
        label: 'Конаковский филиал АО "Дитсманн"'
      }, {
        value: 'dd63b1fd-b16b-e411-9304-00059a3c7a00',
        label: 'Рефтинский филиал АО "Дитсманн"'
      }, {
        value: 'd692de28-b26b-e411-9304-00059a3c7a00',
        label: 'Невинномысский филиал АО "Дитсманн"'
      },{
        value: '8d9924c9-b26b-e411-9304-00059a3c7a00',
      label: 'Среднеуральский филиал АО "Дитсманн"'
    }, {
      value: '8f75602d-b46b-e411-9304-00059a3c7a00',
        label: 'АО "Дитсманн"'
    }, {
      value: '2e5fc2c0-5628-e911-a2bf-005056844c9d',
        label: 'АО "Дитсманн" обособленное подразделение в г. Екатеринбурге'
    },{
        value: '2fa15055-d0f7-ea11-a2dc-005056844c9d',
        label: 'Ачинский филиал АО "Дитсманн"'
      }],

      value: ''
    };
  },
  watch: {
    $route(to, from) {
      //console.log('Aside to = ', to)
      if (to.name === 'add-chart') {
        console.log('Aside to = ', to.name)
        this.value = Cookies.get('CompanyId')
      } else {
        this.value  = to.params.id
        if (to.params.id ==='achinsk'){
          this.value = 'Ачинский филиал АО Дитсманн'
        }
      }
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
.logo_aside {
  height: 50px;

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


