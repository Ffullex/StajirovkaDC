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
  name: 'CreateProjectForm',
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
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('projects/createProject', this.form).then(() => {
            this.$emit('close')
            this.form.name = null
          })
        }
      })
    },
  },
}
</script>