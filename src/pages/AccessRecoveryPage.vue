<template>
  <div class="login-form">
    <access-recovery-form />
  </div>
</template>

<script>
import AccessRecoveryForm from '@/components/AccessRecoveryForm'

export default {
  name: 'AccessRecoveryPage',
  components: {
    AccessRecoveryForm,
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  height: calc(100vh - 250px);
}
</style>