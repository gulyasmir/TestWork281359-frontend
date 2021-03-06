<template>
  <div class="empty-layout">
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <Nuxt/>
    </el-main>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: "empty",
  components:{
    Header
  },
  computed:{
    error() {
      return this.$store.getters.error
    }
  },
  watch:{
    error(value){
      this.$message.error(value.response.data.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-layout{
  background:var(--bg-color);
  width: 80%;
  margin: 0 auto;
}

</style>
