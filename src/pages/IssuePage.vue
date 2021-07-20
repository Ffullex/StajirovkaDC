<template>
  <el-container>
    <issues :id="Number($route.params.id)" />
  </el-container>
</template>

<script>
import Issues from '@/components/Issue/Issue'
export default {
  name: 'IssuePage',
  components: { Issues },
  mounted() {
    this.$store
      .dispatch('projects/getProjectsById', this.$route.params.id)
      .then(() => {
        this.loading = false
      })
  },
}
</script>
