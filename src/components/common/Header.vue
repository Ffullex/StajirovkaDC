<template>
  <div class="navbar">
    <el-menu
      class="navbar__menu"
      mode="horizontal"
      :router="true"
      active-text-color="black"
    >
      <el-row class="navbar__row">
        <el-col class="navbar__group-menu" :span="12">
          <div class="navbar__logo">
            <img src="@/assets/jira-logo-scaled.png" alt="logo" width="158" />
          </div>
          <router-link to="/home" tag="div">
            <el-menu-item class="navbar__menu-item" trigger="click">
              Рабочий стол
            </el-menu-item>
          </router-link>
          <el-dropdown
            class="navbar__menu-item navbar__submenu"
            :hide-on-click="false"
          >
            <span class="el-dropdown-link navbar__submenu-title">
              Проекты
              <i class="el-icon-arrow-down el-icon--right navbar__icon"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link class="navbar__link" to="/browseProjects">
                <el-dropdown-item class="navbar__submenu-item">
                  Все проекты
                </el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown
            class="navbar__menu-item navbar__submenu"
            :hide-on-click="false"
          >
            <span class="el-dropdown-link navbar__submenu-title">
              Доски
              <i class="el-icon-arrow-down el-icon--right navbar__icon"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link class="navbar__link" to="/allBoards">
                <el-dropdown-item>Все доски</el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col class="navbar__group-menu--flex-end" :span="12">
          <div class="navbar__search">
            <input class="navbar__input" placeholder="Поиск" />
          </div>
          <a class="dialog-button" @click="helpFormVisible = true">
            <el-menu-item class="navbar__menu-item">
              <i class="el-icon-s-promotion navbar__icon"></i>
            </el-menu-item>
          </a>
          <el-menu-item class="navbar__menu-item">
            <i class="el-icon-info navbar__icon"></i>
          </el-menu-item>
          <el-dropdown
            class="navbar__menu-item navbar__submenu"
            :hide-on-click="false"
          >
            <span class="el-dropdown-link">
              <img
                src="@/assets/profile.svg"
                class="navbar__submenu-img"
                width="25px"
                alt="profile"
              />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="navbar__submenu-item">
                <el-button type="text" @click="logout">Выход</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-menu>
    <el-dialog title="Помощь" :visible.sync="helpFormVisible">
      <form-help-menu />
    </el-dialog>
  </div>
</template>

<script>
import FormHelpMenu from '@/components/FormHelpMenu'
export default {
  name: 'Header',
  components: { FormHelpMenu },
  data() {
    return {
      helpFormVisible: false,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout').then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: $color--primary;
  padding: 0 30px;
  border: none;
  min-width: 1000px;
  &__menu {
    border: none;
  }

  &__row {
    background-color: $color--primary;
    min-width: 400px;
  }

  &__group-menu {
    display: flex;
    min-width: 450px;

    &--flex-end {
      display: flex;
      justify-content: flex-end;
    }
  }

  &__logo {
    margin-top: 5px;
    margin-right: 20px;
  }

  &__menu-item {
    color: white;
    height: 40px;
    line-height: 40px;

    &:hover {
      color: white;
      background-color: $color--secondary;
      cursor: pointer;
    }

    &:focus {
      color: white;
      background-color: $color--primary;
    }
  }

  &__search {
    margin-top: 5px;
    width: 200px;
  }

  &__input {
    height: 30px;
    background-color: $color--secondary;
    border: 1px solid $color--secondary;
    border-radius: 4px;
    color: white;
  }

  &__icon {
    color: white;
  }

  &__submenu {
    vertical-align: top;
    padding: 0 20px;
  }

  &__submenu-title {
    color: white;
  }

  &__submenu-img {
    padding-top: 8px;
  }

  &__link {
    text-decoration: none;
  }
}
</style>