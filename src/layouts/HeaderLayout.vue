<template>
  <div>
    <Header />
    <div class="children">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'

export default {
  name: 'HeaderLayout',
  components: { Header },
}
</script>

<style lang="scss" scoped>
.children {
  height: calc(100vh - 40px);
  background-color: white;
  min-width: 1000px;
  min-height: 300px;
}
</style>

<style>
body {
  background-color: white;
}
</style>