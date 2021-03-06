<template>
  <div class="empty-layout">
    <Nuxt/>
  </div>
</template>

<script>
export default {
  name: "empty",

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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 80px 0;
  background: #e5e5e5;

}
.dark_theme{
  .empty-layout{
    background-image: url("../static/img/bg-empty-dark.svg");
  }
}
.light_theme{
  .empty-layout{
    background-image: url("../static/img/bg-empty.svg");
  }
}
</style>
