<template>
  <el-menu class="sidebar" :router="true">
    <router-link :to="{ name: 'tasks' }" class="sidebar__link">
      <el-menu-item index="/tasks" class="sidebar__item">
        <i class="el-icon-tickets sidebar__icon"></i>
        Список задач
      </el-menu-item>
    </router-link>
    <router-link
      :to="{ name: 'boardID', params: { id: boardId } }"
      class="sidebar__link"
    >
      <el-menu-item class="sidebar__item">
        <i class="el-icon-c-scale-to-original sidebar__icon"></i>
        Активные спринты
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    boardId: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.sidebar {
  min-height: 100%;
  width: 220px;
  background-color: $color--background;

  &__item {
    display: flex;
    align-content: center;
    height: 40px;
    line-height: 40px;
  }

  &__link {
    text-decoration: none;
  }

  &__icon {
    line-height: 40px;
  }
}
</style>