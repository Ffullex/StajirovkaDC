<template>
  <div class="right">
    <div class="people">
      <el-button class="right__buttons" @click="show3 = !show3">
        <i :class="show3 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'" />
        Люди
      </el-button>
      <el-collapse-transition>
        <div v-show="show3">
          <div class="right__row">
            <el-col :span="12" class="right__column"> Уполномоченный: </el-col>
            <el-col :span="12" class="right__column">
              {{ issue.assigner.name }}
            </el-col>
          </div>
          <div class="right__row">
            <el-col :span="12" class="right__column"> Докладчик: </el-col>
            <el-col :span="12" class="right__column">
              {{ issue.reporter.name }}
            </el-col>
          </div>
        </div>
      </el-collapse-transition>
    </div>

    <div class="date">
      <el-button class="right__buttons" @click="show4 = !show4">
        <i :class="show4 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'" />
        Даты
      </el-button>
      <el-collapse-transition>
        <div v-show="show4">
          <div class="right__row">
            <el-col :span="12" class="right__column"> Создано: </el-col>
            <el-col :span="12" class="right__column">
              {{ issue.project.created_at | dateFilter }}
            </el-col>
          </div>
          <div class="right__row">
            <el-col :span="12" class="right__column">
              Последнее обновление:</el-col
            >
            <el-col :span="12" class="right__column">
              {{ issue.project.updated_at | dateFilter }}
            </el-col>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssuesMainPeople',
  filters: {
    dateFilter: (date) => {
      const filterDate = new Date(date)
      return `${filterDate.getDate()}-${
        filterDate.getMonth() + 1
      }-${filterDate.getFullYear()}`
    },
  },
  props: {
    issue: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeNames: ['1'],
      show3: true,
      show4: true,
      show5: true,
      show6: true,
    }
  },
}
</script>

<style scoped lang='scss'>
.right {
  min-width: 330px;
  background-color: #fff;
  &__buttons {
    border: none;
    content: '\e790';
    color: black;
    background-color: white;

    &__buttons:active {
      content: '\e791';
    }
  }
  &__column {
    padding: 5px;
    font-size: 14px;
    margin: 0 40px;
    min-width: 150px;
  }
  &__row {
    display: flex;
  }
}

.el-icon-caret {
  &-bottom {
    background-color: $color--background;
  }
  &-right {
    background-color: $color--background;
  }
}
</style>