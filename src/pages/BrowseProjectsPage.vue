<template>
  <div class="browse-project">
    <div class="browse-project__title">
      <h2>Просмотр проектов</h2>
    </div>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="12">
            <el-header class="browse-project__header">
              <h3>Все проекты</h3>
            </el-header>
          </el-col>
          <el-col :span="12" class="browse-project__search-group">
            <el-input
              v-model="search"
              placeholder="Поиск..."
              class="browse-project__search"
            />
            <el-button
              class="browse-project__button"
              type="primary"
              @click="dialogVisible = true"
            >
              Создать
            </el-button>
          </el-col>
        </el-row>

        <div v-loading="loading" class="browse-project__table">
          <el-row class="browse-project__row">
            <el-col>
              <project-table :projects="getProject.data" />
            </el-col>
          </el-row>
        </div>
        <div class="browse-project__pagination">
          <el-pagination
            :total="Number(getProject.last_page) * 10"
            page-size="10"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-main>
    </el-container>
    <el-dialog title="Создание проекта" :visible.sync="dialogVisible">
      <create-project-form @close="dialogVisible = false" />
    </el-dialog>
  </div>
</template>

<script>
import ProjectTable from '@/components/project/ProjectTable'
import CreateProjectForm from '@/components/project/CreateProjectForm'

export default {
  name: 'BrowseProjectsPage',
  components: {
    ProjectTable,
    CreateProjectForm,
  },
  data() {
    return {
      search: '',
      dialogVisible: false,
      loading: null,
    }
  },
  computed: {
    getProject() {
      return this.$store.getters['projects/projects']
    },
  },
  mounted() {
    this.loading = true
    this.$store.dispatch('projects/getProjects').then(() => {
      this.loading = false
    })
  },
  methods: {
    handleCurrentChange(val) {
      this.loading = true
      this.$store.dispatch('projects/updateProjects', val).then(() => {
        this.loading = false
      })
    },
  },
}
</script>

<style scoped lang="scss">
.browse-project {
  background-color: white;
  width: 100%;

  &__title {
    justify-content: left;
    border-bottom: 1px solid $color--borderline;
    h2 {
      margin: 10px 0 20px 20px;
    }
  }

  &__header {
    padding: 20px;
    h3 {
      margin: 0;
      padding: 0;
    }
  }

  &__search {
    width: 250px;
    margin: 0;
    padding: 0;
  }

  &__search-group {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
  &__button {
    height: 30px;
    text-align: center;
    margin: 0 0 0 10px;
    padding: 0 20px;
  }
  &__table {
    padding: 0 20px 20px 20px;
    overflow: auto;
    height: calc(100vh - 330px);
  }
  &__pagination {
    border-top: 1px solid $color--borderline;
    padding: 10px 20px;
  }
}
.el-row {
  width: 100%;
}
.el-col {
  min-width: 360px;
}
.el-main {
  width: 100%;
  padding: 0;
}
</style>

<style>
body {
  background-color: white;
}
</style>