<template>
  <el-table v-if="projects" class="table" :data="projects">
    <el-table-column
      v-for="column in columns"
      :key="column.code"
      :prop="column.prop"
      :label="column.label"
    >
      <template v-if="column.prop === 'project'" v-slot:default="table">
        <router-link
          :to="{ name: 'issueID', params: { id: table.row.id } }"
          tag="span"
        >
          <el-button type="text">{{ table.row.name }}</el-button>
        </router-link>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'ProjectTable',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      columns: [
        {
          prop: 'project',
          label: 'Проект',
        },
        {
          prop: 'id',
          label: 'Код',
        },
        {
          prop: 'user.name',
          label: 'Руководитель',
        },
      ],
      scroll: false,
    }
  },
}
</script>

<style scoped lang="scss">
.table {
  min-width: 100%;
}
</style>
