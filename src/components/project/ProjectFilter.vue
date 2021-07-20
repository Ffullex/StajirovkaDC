<template>
  <el-aside>
    <el-menu class="filter">
      <el-menu-item-group class="filter__type" title="ТИПЫ ПРОЕКТОВ">
        <el-menu-item class="filter__item">Software</el-menu-item>
        <el-menu-item class="filter__item">Business</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group class="filter__categories" title="КАТЕГОРИИ">
        <el-menu-item class="filter__item">Php Project</el-menu-item>
        <el-menu-item class="filter__item">Недание проекты</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'ProjectFilter',
}
</script>

<style lang="scss">
.filter {
  &__categories {
    margin-top: 30px;
  }

  &__item {
    display: flex;
    align-content: center;
    height: 40px;
    line-height: 40px;
  }
}
</style>