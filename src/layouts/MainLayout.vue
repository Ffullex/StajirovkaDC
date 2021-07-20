<template>
  <div>
    <Header />
    <div class="children">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default {
  name: 'MainLayouts',
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped lang="scss">
.children {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  min-width: 1000px;
  height: calc(100vh - 170px);
}
</style>
