<template>
  <div>
    <div class="icon el-icon-back"  @click="toBack"></div>
      <h1>Добавление новых пользователей</h1>
      <FormClientCreate/>

  </div>
</template>

<script>
import FormClientCreate from '@/components/FormClientCreate'
export default {
name: "create",
  layout:'empty',
  middleware:['ifAuth'],
  components:{
    FormClientCreate
  },
  methods:{
    toBack(){
      this.$router.push('/clients')
    }
  }
}
</script>

<style scoped>

</style>
