<template>
  <div>
    <el-table class="table" :data="boards">
      <el-table-column prop="name" label="Имя панели">
        <template slot-scope="table">
          <router-link
            tag="span"
            :to="{ name: 'boardID', params: { id: table.row.id } }"
          >
            <el-button type="text">{{ table.row.name }}</el-button>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="user" label="Администратор">
        <template slot-scope="table">
          <span>
            {{ table.row.user.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column class="table__button" align="right">
        <el-button class="table__button" size="mini">
          <i class="el-icon-more"></i>
        </el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BoardTable',
  props: {
    boards: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
table {
  min-width: 100%;
  min-height: 100%;

  &__button {
    border: none;

    &:hover {
      background-color: #dfe3e7;
      color: black;
    }

    &:focus {
      background-color: #344563;
      color: white;
    }
  }
}
</style>