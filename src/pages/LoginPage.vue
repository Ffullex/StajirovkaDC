<template>
  <div class="login-form-page">
    <login-form />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  name: 'LoginPage',
  components: { LoginForm },
}
</script>

<style scoped lang="scss">
.login-form-page {
  min-height: calc(100vh - 250px);
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>