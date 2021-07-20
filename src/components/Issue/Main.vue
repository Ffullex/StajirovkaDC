<template>
  <div v-if="issue" class="main">
    <div class="main-header">
      <el-header class="main-header__header" height="40px">
        <h3>{{ issue.subject }}</h3>
      </el-header>
      <div class="main-header__buttons">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="12">
            <el-button type="info" size="mini" @click="dialogVisible = true">
              <i class="el-icon-edit"></i>
              Редактировать
            </el-button>
            <el-dialog
              title="Редактирование задачи"
              :visible.sync="dialogVisible"
            >
              <div v-if="dialogVisible">
                <edit-issue
                  v-if="dialogVisible"
                  :project-id="id"
                  :issue="issue"
                  @close="dialogVisible = false"
                />
              </div>
            </el-dialog>
          </el-col>

          <el-col :span="12">
            <div class="main-header__export-button">
              <el-button type="info" size="mini" @click="doneIssue">
                Завершить задачу
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="main-body">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="12">
          <IssueMainDetails :issue="issue" />
        </el-col>
        <el-col :span="12">
          <IssueMainPeople :issue="issue" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import IssueMainDetails from '@/components/Issue/MainDetails'
import IssueMainPeople from '@/components/Issue/MainPeople'
import EditIssue from '@/components/Issue/IssueEditForm'
export default {
  name: 'IssueMainInternal',
  components: {
    IssueMainDetails,
    IssueMainPeople,
    EditIssue,
  },
  props: {
    issue: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    doneIssue() {
      const payload = {
        group: 'DONE',
        id: this.issue.id,
      }
      this.$store.dispatch('issues/setStatus', payload).then(() => {
        this.$store.dispatch('issues/getIssuesById', this.issue.id)
      })
    },
  },
}
</script>

<style scoped lang="scss">
.main-body {
  min-width: 900px;
}
.main-header {
  background-color: white;
  min-width: 844px;
  width: 100%;
  &__export-button {
    display: flex;
    justify-content: flex-end;
  }
  &__buttons {
    min-width: 360px;
    width: 100%;
  }
}
.dropdown-more {
  margin: 0 10px;
}
.el-button {
  color: #344563;
  background-color: #ebedf0;
  border: none;
  margin: 0 22px;
  &:hover {
    background-color: #dfe1e6;
  }
}
.el-icon-caret {
  &-right {
    background-color: $color--background;
  }
  &-bottom {
    background-color: $color--background;
  }
}
</style>