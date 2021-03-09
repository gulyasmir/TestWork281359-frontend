<template>
  <div class="pade-update">
    <div class="icon el-icon-back"  @click="toBack"></div>
    <h1>Изменить данные о пользователе </h1>
    <FormClientUpdate
      :idClients="this.idClients"
    />

  </div>
</template>

<script>
import FormClientUpdate from '@/components/FormClientUpdate'
export default {
  name: "update",
  layout:'empty',
  middleware:['ifAuth'],
  components:{
    FormClientUpdate
  },
  data(){
    return{
      idClients:this.$route.params.id
    }
  },
  mounted() {
    console.log('this.$route.params.id = ', this.$route.params.id)
  },
  methods:{
    toBack(){
      this.$router.push('/clients')
    }
  }
}
</script>

<style scoped>
h1{
  padding:25px 0;
}
</style>
