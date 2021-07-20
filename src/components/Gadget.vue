<template>
  <div>
    <div class="gadget-page__title">
      <h2>Рабочий стол</h2>
    </div>

    <div class="gadget">
      <div class="gadget__header">Назначен мне</div>
      <el-row class="gadget__row">
        <el-col>
          <el-table
            ref="singleTable"
            class="gadget__table"
            :data="displayData"
            highlight-current-row
          >
            <el-table-column label="T" width="46px">
              <img src="@/assets/taskType/task.svg" alt="task" />
            </el-table-column>
            <el-table-column prop="id" label="Ключ" width="100px">
            </el-table-column>
            <el-table-column prop="summary" label="Название">
              <template slot-scope="table">
                <router-link
                  :to="{
                    name: 'issueID',
                    params: { id: table.row.project_id },
                    query: { selectedIssue: table.row.id },
                  }"
                  tag="span"
                >
                  <el-button type="text">{{ table.row.subject }}</el-button>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column label="П " width="46px">
              <template slot-scope="table">
                <img
                  :src="require(`@/assets/priority/${table.row.priority}.svg`)"
                  width="16px"
                  alt="task"
                />
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-pagination
        :total="total"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gadget',
  props: {
    issues: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      page: 1,
      pageSize: 3,
      total: 0,
    }
  },
  computed: {
    displayData() {
      this.handleTotalChange(this.issues.length)
      return this.issues.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      )
    },
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val
    },
    handleTotalChange(lenght) {
      this.total = lenght
    },
  },
}
</script>

<style scoped lang="scss">
.gadget {
  max-height: 350px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  color: $color--background;
  background-color: white;
  width: 1000px;
  margin: 50px;
  &-page__title {
    h2 {
      margin-left: 60px;
    }
  }

  &__header {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.006em;
    color: white;
    background-color: $color--primary;
    height: 20px;
    padding: 4px 64px 20px 10px;
    border: 1px solid $color--fonts;
    text-align: left;
    vertical-align: center;
  }

  &__scroll {
    display: block;
    text-align: left;
    height: 20px;
    padding-left: 20px;
    background-color: $color--background;
    border: 1px solid $color--fonts;
    color: black;
  }
}
</style>