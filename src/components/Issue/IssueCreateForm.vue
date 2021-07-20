<template>
  <el-form
    ref="form"
    class="form"
    label-position="right"
    label-width="110px"
    :model="form"
    :rules="rules"
  >
    <el-form-item label="Название" prop="subject">
      <el-input v-model="form.subject"></el-input>
    </el-form-item>

    <el-form-item label="Описание" prop="description">
      <el-input v-model="form.description" type="textarea"></el-input>
    </el-form-item>

    <el-form-item label="Приоритет" prop="priority">
      <el-select
        v-model="form.priority"
        value-key="value"
        placeholder="Выберите приоритет"
      >
        <template slot="prefix">
          <div class="form__prefix-image">
            <icon-template :name="form.priority.photo" width="18" height="18" />
          </div>
        </template>
        <el-option
          v-for="item in priority"
          :key="item.value"
          :label="item.label"
          :value="item"
          class="form__option"
        >
          <div class="form__option">
            <icon-template :name="item.photo" width="18" height="18" />
            <span class="form__option-label">
              {{ item.label }}
            </span>
          </div>
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="Исполнитель" prop="assigned">
      <el-select v-model="form.assigned" filterable>
        <el-container
          v-infinite-scroll="loadUsers"
          infinite-scroll-disabled="disabled"
        >
          <div class="form__selector-options">
            <el-option
              v-for="user in getSearchUsers.data"
              :key="'user' + user.id"
              :label="user.name"
              :value="user.id"
            >
              {{ user.name }}
            </el-option>
          </div>
        </el-container>
      </el-select>
    </el-form-item>

    <el-form-item label="Доски" prop="dashboards">
      <el-select v-model="form.dashboards" filterable>
        <el-container
          v-infinite-scroll="loadDashboards"
          infinite-scroll-disabled="disabled"
        >
          <div>
            <el-option
              v-for="dashboard in getSearchDashboard.data"
              :key="dashboard.id"
              :label="dashboard.name"
              :value="dashboard.id"
            >
              {{ dashboard.name }}
            </el-option>
          </div>
        </el-container>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">Создать</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'CreateIssueForm',
  props: {
    projectId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      form: {
        subject: null,
        description: null,
        priority: {
          value: 'MINOR',
          label: 'Minor',
          photo: 'MINOR',
        },
        assigned: null,
        dashboards: null,
      },
      rules: {
        subject: [
          {
            required: true,
            message: 'Введите название задачи',
          },
        ],
        description: [
          {
            required: true,
            message: 'Введите описание задачи',
          },
        ],
        priority: [
          {
            required: true,
            message: 'Введите приоритет задачи',
          },
        ],
        assigned: [
          {
            required: true,
            message: 'Выберете исполняющего',
          },
        ],
      },
      priority: [
        {
          value: 'BLOCK',
          label: 'Block',
          photo: 'BLOCK',
        },
        {
          value: 'CRITICAL',
          label: 'Critical',
          photo: 'CRITICAL',
        },
        {
          value: 'MINOR',
          label: 'Minor',
          photo: 'MINOR',
        },
        {
          value: 'TRIVIAL',
          label: 'Trivial',
          photo: 'TRIVIAL',
        },
      ],
      selectedPriority: '',
      users: null,
      pageDashboard: 0,
      loading: false,
    }
  },
  computed: {
    disabled() {
      return this.loading
    },
    getSearchUsers() {
      return this.$store.getters['user/searchUsers']
    },
    getUser() {
      return this.$store.getters['user/user']
    },
    getSearchDashboard() {
      return this.$store.getters['dashboards/searchDashboards']
    },
  },
  mounted() {
    this.loadUsers()
    this.loadDashboards()
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          const payload = {
            subject: this.form.subject,
            description: this.form.description,
            priority: this.form.priority.value,
            status: 'TO DO',
            project_id: this.projectId,
            assigned_id: this.form.assigned,
            reporter_id: this.getUser.id,
            dashboard_id: this.form.dashboards,
          }
          this.$store.dispatch('issues/createIssues', payload).then(() => {
            this.$store
              .dispatch('projects/getProjectsById', this.projectId)
              .then(() => {
                this.$emit('close')
              })
          })
        }
      })
    },
    loadUsers() {
      if (this.getSearchUsers.currentPage <= this.getSearchUsers.lastPage) {
        this.loading = true
        this.$store
          .dispatch('user/getUserByPage', this.getSearchUsers.currentPage + 1)
          .then(() => (this.loading = false))
      }
    },
    loadDashboards() {
      if (
        this.getSearchDashboard.currentPage <= this.getSearchDashboard.lastPage
      ) {
        this.loading = true
        this.$store
          .dispatch(
            'dashboards/searchDashboards',
            this.getSearchDashboard.currentPage + 1
          )
          .then(() => (this.loading = false))
      }
    },
  },
}
</script>

<style scoped lang='scss'>
.form {
  &__prefix-image {
    padding-top: 5px;
  }

  &__selector-options {
    min-width: 100%;
  }

  &__option {
    display: flex;
    align-items: center;
  }

  &__option-label {
    margin-left: 5px;
  }
}
</style>