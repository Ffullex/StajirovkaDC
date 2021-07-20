<template>
  <div class="aside-internal">
    <div class="aside-internal__top">
      <div
        v-for="issue in issues"
        :key="issue.id"
        class="aside-internal__issue"
      >
        <router-link
          class="aside-internal__issue-title"
          :to="{ name: 'issueID', query: { selectedIssue: issue.id } }"
        >
          {{ issue.subject }}
        </router-link>
      </div>
    </div>
    <div class="aside-internal__bot">
      <el-button class="aside-internal__button" @click="dialogVisible = true">
        Создать задание
      </el-button>
      <el-dialog title="Создание задачи" :visible.sync="dialogVisible">
        <create-issue
          v-if="dialogVisible"
          :project-id="id"
          @close="dialogVisible = false"
        />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import CreateIssue from './IssueCreateForm'

export default {
  name: 'IssueAsideInternal',
  components: { CreateIssue },
  props: {
    issues: {
      type: Array,
      required: false,
    },
    id: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
}
</script>

<style scoped lang="scss">
.el-aside {
  background-color: $color--background;
}
.aside-internal {
  &__top {
    height: calc(100vh - 165px);
    overflow: auto;
    border-bottom: 1px solid $color--borderline;
  }

  &__bot {
    margin: 10px 0 10px 10px;
    background-color: white;
    height: 40px;
    width: 260px;
  }
  &__button {
    background-color: white;
    border: none;
    font-size: 16px;
  }
  &__issue {
    max-width: 200px;
    padding: 15px;
    margin: 10px;
  }
  &__issue-title {
    color: $color--primary;
    text-decoration: none;
  }
}
</style>
