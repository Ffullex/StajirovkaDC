<template>
  <div class="issue">
    <div class="issue__header">
      <div>
        <h3>
          {{ issue.subject }}
        </h3>
      </div>
      <div class="issue__close">
        <button class="issue__close-button" @click="clickHandle">
          <i class="el-icon-close"></i>
        </button>
      </div>
    </div>
    <el-row>
      <el-col>
        <issue-main-details :issue="issue" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <issues-main-people :issue="issue" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IssueMainDetails from '@/components/Issue/MainDetails'
import IssuesMainPeople from '@/components/Issue/MainPeople'

export default {
  name: 'SelectIssue',
  components: {
    IssuesMainPeople,
    IssueMainDetails,
  },
  props: {
    issue: {
      type: Object,
      required: true,
    },
  },
  methods: {
    clickHandle() {
      this.$emit('closeIssue')
    },
  },
}
</script>

<style scoped lang="scss">
.issue {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
  }

  &__close-button {
    margin-right: 17px;
    background-color: white;
    cursor: pointer;
    border: none;
    width: 20px;
    font-size: 20px;
  }
}
</style>