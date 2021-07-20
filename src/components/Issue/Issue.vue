<template>
  <div class="widthClass">
    <el-container v-if="getProject.issues" class="container-main">
      <IssueAsideExternal />
      <el-container class="content-internal">
        <el-header class="header-internal">
          <IssueHeaderInternal />
        </el-header>
        <el-container class="container-internal">
          <el-aside class="aside-internal">
            <IssueAsideInternal :id="id" :issues="getProject.issues" />
          </el-aside>
          <el-main v-loading="loading" class="main-internal">
            <IssueMainInternal :issue="getIssue" />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import IssueAsideExternal from './AsideExternal'
import IssueHeaderInternal from './Header'
import IssueMainInternal from './Main'
import IssueAsideInternal from './AsideInternal'
export default {
  name: 'Issues',
  components: {
    IssueAsideInternal,
    IssueMainInternal,
    IssueHeaderInternal,
    IssueAsideExternal,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    getProject() {
      return this.$store.getters['projects/selectedProject']
    },
    getIssue() {
      return this.$store.getters['issues/selectIssue']
    },
  },
  watch: {
    '$route.query.selectIssue': {
      handler: function () {
        this.loading = true
        this.$store
          .dispatch('issues/getIssuesById', this.$route.query.selectedIssue)
          .then(() => {
            this.loading = false
          })
      },
      deep: true,
    },
  },
  mounted() {
    if (this.$route.query.selectedIssue) {
      this.loading = false
      this.$store
        .dispatch('issues/getIssuesById', this.$route.query.selectedIssue)
        .then(() => {
          this.loading = false
        })
    } else {
      this.loading = false
      this.$store
        .dispatch('issues/getIssuesById', this.getProject.issues[0].id)
        .then(() => {
          this.loading = false
        })
    }
  },
}
</script>

<style lang="scss">
.widthClass {
  width: 100%;
}
.borderLine {
  padding: 0;
  margin: 0 0 0 0;
}
.container-main {
  background-color: #fff;
  height: calc(100vh - 40px);
}
.aside-external {
  padding: 0;
  background-color: $color--background;
}
.aside-internal {
  border-right: 1px solid $color--borderline;
}
.header-internal {
  padding: 0;
  margin: 0;
}
.main-internal {
  padding: 0;
}
</style>