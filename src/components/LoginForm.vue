<template>
  <el-container class="login-form">
    <el-header>
      <el-container>
        <h2>Добро пожаловать в DC Jira</h2>
      </el-container>
    </el-header>
    <el-form
      ref="form"
      label-position="right"
      label-width="100px"
      :model="form"
      :rules="rules"
    >
      <el-form-item label="Email" prop="email">
        <el-input
          v-model="form.email"
          class="login-form__form-input"
        ></el-input>
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          class="login-form__form-input"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="info">
        <span>
          Еще не зарегистрированы? Чтобы получить аккаунт, Пожалуйста,
          обратитесь к администраторам Вашей Jira.
        </span>
      </el-form-item>
      <el-form-item>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Запомнить меня" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-form__submit-button"
          type="primary"
          @click="onSubmit('form')"
        >
          Log in
        </el-button>
      </el-form-item>
      <el-form-item>
        <router-link class="login-form__link" to="recoveryAccess">
          Не можете получить доступ к своей учетной записи?
        </router-link>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: null,
        password: null,
        type: [],
      },
      rules: {
        email: [
          {
            type: 'email',
            required: true,
            message: 'Введите email',
            trigger: 'change',
          },
        ],
        password: [
          {
            required: true,
            message: 'Введите пароль',
            trigger: 'change',
          },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/login', this.form).then(() => {
            this.$router.push('home')
          })
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.login-form {
  padding-top: 10px;
  display: block;
  background-color: white;
  width: 500px;
  border-radius: 5px;
  border: 1px solid #cacaca;

  &__submit-button {
    display: flex;
    justify-content: flex-start;
  }

  &__form-input {
    justify-content: flex-start;
  }

  &__link {
    margin-top: 20px;
  }

  &__alert {
    padding: 0 10px;
  }
}
</style>