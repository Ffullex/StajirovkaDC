<template>
  <el-menu default-active="2" class="aside-external" :collapse="isCollapse">
    <el-menu-item index="1">
      <img
        class="aside-external__avatar"
        src="../../assets/profile.svg"
        alt=""
      />
      <span slot="title" class="aside-external__title">{{
        getProject.name
      }}</span>
    </el-menu-item>

    <el-menu-item
      index="2"
      class="aside-external__item-button"
      @click="dialogVisible = true"
    >
      <i class="el-icon-plus"></i>
      <span slot="title">Создать доску</span>
    </el-menu-item>

    <el-menu-item index="3" class="aside-external__issues">
      <i class="el-icon-finished"></i>
      <span slot="title">Задачи</span>
    </el-menu-item>

    <el-radio-group
      v-model="isCollapse"
      size="mini"
      style="margin-bottom: 20px"
    >
      <el-radio-button :label="!isCollapse">
        <i
          :class="isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"
        ></i>
      </el-radio-button>
    </el-radio-group>
    <el-dialog title="Создание доски" :visible.sync="dialogVisible">
      <create-dashboard-form @close="dialogVisible = false" />
    </el-dialog>
  </el-menu>
</template>

<script>
import CreateDashboardForm from '@/components/CreateDashboardForm'
export default {
  name: 'IssueAsideExternal',
  components: { CreateDashboardForm },
  data() {
    return {
      dialogVisible: false,
      isCollapse: true,
    }
  },
  computed: {
    getProject() {
      return this.$store.getters['projects/selectedProject']
    },
  },
}
</script>

<style scoped lang="scss">
.aside-external {
  position: relative;
  background-color: $color--background;
  min-width: 60px;
  min-height: 330px;
  &__item-button {
    padding: 0;
    margin: 0;
  }

  &__issues {
    background-color: #dfe1e6;
  }
  &__avatar {
    max-height: 24px;
    max-width: 24px;
    margin-right: 5px;
  }
}
.el-menu-item {
  border-radius: 5px;
  &:hover {
    background-color: #dfe1e6;
  }
}
.el-radio {
  &-group {
    position: absolute;
    bottom: 0;
    right: 10px;
    padding: 0;
  }
  &-button {
    background-color: $color--background;

    &:hover {
      background-color: $color--background;
    }
  }
}
</style>