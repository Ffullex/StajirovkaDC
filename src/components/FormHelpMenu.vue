<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Summary">
      <el-input v-model="form.summary"></el-input>
    </el-form-item>
    <el-form-item label="Description">
      <el-input v-model="form.description" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="Name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="submit-button" type="primary" @click="submitForm">
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'FormHelpMenu',
  data() {
    return {
      form: {
        summary: null,
        description: null,
        name: null,
        email: null,
      },
    }
  },
  methods: {
    submitForm() {
      console.log('submit', this.form)
    },
  },
}
</script>

<style scoped lang="scss">
.submit-button {
  display: flex;
  justify-content: flex-start;
}
</style>