<template>
  <el-container class="tasks">
    <el-aside class="tasks__aside">
      <sidebar :board-id="getBoard.id" />
    </el-aside>
    <el-container class="tasks__main">
      <el-header class="tasks__header">
        <div>
          <el-row>
            <el-col class="tasks__username">
              <span>{{ getBoard.user_id.name }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <span class="tasks__title">{{ getBoard.name }}</span>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <el-row>
          <el-col>
            <tasks :issues="getBoardColumn" />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Tasks from '@/components/task/Tasks'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'TasksPage',
  components: { Sidebar, Tasks },
  computed: {
    getBoard() {
      return this.$store.getters['dashboards/selectedBoard']
    },
    getBoardColumn() {
      const cols = ['TO DO', 'IN PROGRESS', 'MANAGER', 'CLIENT', 'DONE']

      return cols.map((col) => {
        return {
          name: col,
          issues: this.getBoard.issues[col].filter(
            (issue) => issue.assigner.id === this.getUser.id
          ),
        }
      })
    },
    getUser() {
      return this.$store.getters['user/user']
    },
  },
}
</script>

<style scoped lang="scss">
.tasks {
  width: 100%;
  height: 100%;

  &__aside {
    max-width: 220px;
  }

  &__main {
    min-height: 100%;
    padding-top: 20px;
  }

  &__filter {
    font-size: 12px;
    padding-left: 10px;
    padding-bottom: 5px;
  }

  &__header {
    padding-left: 30px;
  }

  &__title {
    font-size: 20px;
  }

  &__button {
    background-color: white;
    border: 1px solid white;
    height: 30px;
    margin-left: 15px;

    &:hover {
      border: 1px solid #dcdfe6;
      color: #1577ff;
    }
  }
}
</style>