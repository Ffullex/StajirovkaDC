<template>
  <div class="sprint">
    <el-row class="sprint__row">
      <el-col>
        <el-row class="sprint__header header" justify="space-between">
          <el-col :span="12">
            <span class="sprint__title"><b>Список задач</b></span>
            <span>количество проблем: {{ getNumberIssues }}</span>
          </el-col>
          <el-col class="sprint__col--end" :span="12">
            <button class="sprint__button"><i class="el-icon-more"></i></button>
          </el-col>
        </el-row>
        <div v-for="issue in issues" :key="issue.id" class="sprint__items">
          <el-row>
            <el-col class="sprint__items-title">
              {{ issue.name }}
            </el-col>
          </el-row>
          <div v-if="issue.issues.length > 0">
            <el-row
              v-for="task in issue.issues"
              :key="task.id"
              class="sprint__item"
            >
              <el-col>
                <task-item :task="task" />
              </el-col>
            </el-row>
          </div>
          <div v-else>Нет задач</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TaskItem from '@/components/task/TaskItem'

export default {
  name: 'Tasks',
  components: { TaskItem },
  props: {
    issues: {
      type: Array,
      require: true,
    },
  },
  computed: {
    getNumberIssues() {
      let issuesNumber = 0
      this.issues.map((col) => {
        issuesNumber += col.issues.length
      })
      return issuesNumber
    },
  },
}
</script>

<style scoped lang="scss">
.sprint {
  &__row {
    margin-bottom: 20px;
    padding: 20px;
    background-color: $color--background;
  }

  &__items {
    margin-top: 15px;
    background-color: white;
    padding: 10px;
  }

  &__items-title {
    color: $color--primary;
  }

  &__item {
    margin-bottom: 3px;
  }

  &__button {
    background-color: $color--background;
    border: 1px solid $color--background;
    border-radius: 4px;
    padding: 4px 10px 4px 10px;

    &:hover {
      background-color: #d5d9e0;
    }
  }

  &__col {
    &--end {
      display: flex;
      justify-content: flex-end;
    }
  }

  &__title {
    margin-right: 10px;
  }

  &__date {
    color: $color--minor-fonts;
  }
}
</style>