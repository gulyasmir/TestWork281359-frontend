<template>
  <div class="error-layout">
    <div class="error-content">
      <div class="error-title">
        <h1>Ошибка</h1>
        <nuxt-link to="/clients"> Вернуться к списку пользователей </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",

}
</script>

<style scoped>
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 200px;
}
.error-title{
  color:red;
  margin-bottom: 1rem;
text-align: center;
}
</style>
