<template>
  <div>
    Выход из аккаунта
  </div>
</template>

<script>
export default {
  name: "logout",
  layout:'empty',
  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/login?message=logout')
  }
}
</script>

<style scoped>

</style>
