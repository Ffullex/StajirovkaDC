<template>
  <div class="main-page">
    <gadget :issues="getUser.reported_issues" />
  </div>
</template>

<script>
import Gadget from '@/components/Gadget'
export default {
  name: 'MainPage',
  components: { Gadget },
  computed: {
    getUser() {
      return this.$store.getters['user/user']
    },
  },
}
</script>

<style scoped lang="scss">
.main-page {
  height: calc(100vh - 250px);
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
