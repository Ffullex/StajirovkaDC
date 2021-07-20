<template>
  <el-container class="boards">
    <el-header class="boards__header" height="50px">
      <el-row>
        <el-col :span="12">
          <h2>Все доски</h2>
        </el-col>
        <el-col :span="12" class="boards__header-button">
          <el-button
            class="boards__create-button"
            type="primary"
            @click="dialogVisible = true"
          >
            Создать
          </el-button>
        </el-col>
      </el-row>
    </el-header>

    <el-main v-loading="loading">
      <el-row class="boards__row">
        <el-col class="boards__table">
          <board-table :boards="getBoards.data"></board-table>
        </el-col>
      </el-row>
    </el-main>
    <div class="boards__pagination">
      <el-pagination
        :total="Number(getBoards.last_page) * 10"
        :page-size="10"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog title="Создание доски" :visible.sync="dialogVisible">
      <create-dashboard-form @close="dialogVisible = false" />
    </el-dialog>
  </el-container>
</template>

<script>
import BoardTable from '@/components/BoardTable'
import CreateDashboardForm from '@/components/CreateDashboardForm'
export default {
  name: 'AllBoardsPage',
  components: { CreateDashboardForm, BoardTable },
  data() {
    return {
      dialogVisible: false,
      loading: true,
    }
  },
  computed: {
    getBoards() {
      return this.$store.getters['dashboards/boards']
    },
  },
  mounted() {
    this.loading = true
    this.$store.dispatch('dashboards/getDashboards').then(() => {
      this.loading = false
    })
  },
  methods: {
    handleCurrentChange(val) {
      this.loading = true
      this.$store.dispatch('dashboards/updateDashboards', val).then(() => {
        this.loading = false
      })
    },
  },
}
</script>

<style scoped lang="scss">
.boards {
  height: calc(100vh - 170px);
  &__header {
    justify-content: left;
    border-bottom: 1px solid $color--borderline;
    padding: 0;
    h2 {
      margin: 10px 0 10px 10px;
    }
  }
  &__header-button {
    display: flex;
    justify-content: flex-end;
  }
  &__create-button {
    margin-right: 20px;
  }
  &__table {
    min-height: 100%;
  }

  &__row {
    min-width: 100%;
  }

  &__pagination {
    border-top: 1px solid $color--borderline;
    padding-top: 10px;
  }
}
</style>

<style>
body {
  background-color: white;
}
</style>