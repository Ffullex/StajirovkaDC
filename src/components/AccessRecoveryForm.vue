<template>
  <el-form
    ref="ruleForm"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-header><h2>Не можете получить доступ к вашему аккаунту?</h2></el-header>
    <el-alert title="" type="info" show-icon close-text=" ">
      <h3 class="message">
        Если вы не можете получить доступ к Jira, заполните эту форму, и вам
        будет отправлено электронное письмо с данными для повторного доступа к
        вашей учетной записи.
      </h3>
    </el-alert>
    <el-form-item label="Что именно вы забыли?" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Логин"></el-radio>
        <el-radio label="Пароль"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="E-mail" prop="desc">
      <el-input v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">
        Отправить
      </el-button>
      <el-button @click="resetForm('ruleForm')">
        <router-link to="/">Отмена</router-link>
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        resource: null,
        desc: null,
      },
      rules: {
        resource: [
          {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
          },
        ],
        desc: [
          {
            required: true,
            message: 'Please input activity form',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>
<style scoped lang='scss'>
.el-form {
  padding: 10px 10px 20px 10px;
}
.demo-ruleForm {
  display: block;
  background-color: white;
  width: 400px;
  height: 400px;
}
.h2 {
  display: flex;
}
.el-alert {
  background-color: #ecf8ff;
  border-radius: 4px;
  &--info.is-light {
    color: blue;
  }
}
.message {
  font-weight: 300;
  color: $color--secondary;
}
.el-radio-group {
  display: flex;
  flex-direction: column;
  padding-top: 5px;
}
</style>
