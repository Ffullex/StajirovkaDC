<template>
  <div>
    <div class="children">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer'

export default {
  name: 'FooterLayout',
  components: { Footer },
}
</script>

<style lang="scss" scoped>
.children {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 1000px;
  min-height: 300px;
}
</style>