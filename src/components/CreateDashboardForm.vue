<template>
  <el-form
    ref="form"
    label-position="right"
    label-width="110px"
    :model="form"
    :rules="rules"
  >
    <el-form-item label="Название" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">Создать</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'CreateDashboardForm',
  data() {
    return {
      form: {
        name: null,
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Введите название проекта',
          },
        ],
      },
    }
  },
  computed: {
    getUser() {
      return this.$store.getters['user/user']
    },
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          const payload = {
            name: this.form.name,
            user_id: this.getUser.id,
          }
          this.$store
            .dispatch('dashboards/createDashboard', payload)
            .then(() => {
              this.$emit('close')
              this.form.name = null
            })
        }
      })
    },
  },
}
</script>