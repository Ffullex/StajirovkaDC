<template>
  <el-container v-if="getBoard" class="board">
    <el-aside class="board__sidebar">
      <sidebar :board-id="getBoard.id" />
    </el-aside>
    <el-container class="board__main">
      <el-header class="board__header">
        <div>
          <el-row>
            <el-col class="board__username">
              <span>{{ getBoard.user_id.name }}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <span class="board__title">
                {{ getBoard.name }}
              </span>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main class="board__main-board">
        <div class="board__kanban">
          <kanban-board
            :select-issue="selectId"
            :issues="getBoard.issues"
            @issueClick="issueClick"
          />
        </div>
        <div v-if="selectIssue" class="board__select-issue">
          <select-issue :issue="selectIssue" @closeIssue="closeIssue" />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import KanbanBoard from '@/components/KanbanBoard'
import Sidebar from '@/components/Sidebar'
import SelectIssue from '@/components/Issue/SelectIssue'
export default {
  name: 'BoardPage',
  components: { SelectIssue, Sidebar, KanbanBoard },
  filters: {
    dateFilter: (date) => {
      const filterDate = new Date(date)
      return `${filterDate.getDate()}-${
        filterDate.getMonth() + 1
      }-${filterDate.getFullYear()}`
    },
  },
  data() {
    return {
      selectIssue: null,
      selectId: 0,
    }
  },
  computed: {
    getBoard() {
      return this.$store.getters['dashboards/selectedBoard']
    },
  },
  mounted() {
    this.$store.dispatch('dashboards/getDashboardById', this.$route.params.id)
  },
  methods: {
    issueClick(issue) {
      this.selectIssue = issue
      this.selectId = issue.id
    },
    closeIssue() {
      this.selectIssue = null
      this.selectId = null
    },
  },
}
</script>

<style scoped lang="scss">
.board {
  width: 100%;
  height: 100%;

  &__sidebar {
    min-height: 100%;
    max-width: 220px;
  }

  &__main {
    height: 100%;
    padding-top: 20px;
  }

  &__kanban {
    overflow-x: auto;
    border-right: 1px solid #cacaca;
    padding: 20px;
    width: 100%;
  }

  &__kanban-table {
    overflow-x: auto;
    border-right: 1px solid #cacaca;
    padding: 20px;
    width: 100%;
  }

  &__select-issue {
    overflow-x: auto;
    border: 1px solid $color--borderline;
    min-width: 470px;
    max-width: 520px;
    transition: all 5s ease;
    &-enter {
      transition: all 0.8s ease;
    }
    &-leave-to {
      transition: all 0.8s ease;
    }
    &-enter-active {
      transition: all 0.8s ease;
    }
    &-leave-active {
      transition: all 0.8s ease;
    }
  }

  &__main-board {
    display: flex;
    border-top: 1px solid $color--borderline;
    padding: 0;
    height: 10px;
    width: 100%;
  }

  &__dashboard {
    overflow-y: auto;
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

<style>
body {
  background-color: white;
}
</style>