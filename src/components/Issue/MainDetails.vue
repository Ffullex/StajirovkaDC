<template>
  <div class="left">
    <div class="left__details">
      <el-button class="left__buttons" @click="show1 = !show1">
        <i :class="show1 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'" />
        Детали
      </el-button>
      <el-collapse-transition>
        <div v-show="show1">
          <div class="left__row">
            <el-col :span="12" class="left__column">Тип:</el-col>
            <el-col :span="12" class="left__column">
              <img src="@/assets/taskType/task.svg" alt="" width="14" />
              Задача
            </el-col>
          </div>
          <div class="left__row">
            <el-col :span="12" class="left__column">Состояние:</el-col>
            <el-col :span="12">
              <div class="left__column">
                {{ issue.status.toLowerCase() }}
              </div>
            </el-col>
          </div>
          <div class="left__row">
            <el-col :span="12" class="left__column">Приоритет:</el-col>
            <el-col :span="12" class="left__column">
              <img
                :src="require(`@/assets/priority/${issue.priority}.svg`)"
                :alt="issue.priority"
                width="14"
              />
              {{ issue.priority.toLowerCase() }}
            </el-col>
          </div>
        </div>
      </el-collapse-transition>
    </div>

    <div class="left__description">
      <el-button class="left__buttons" @click="show2 = !show2">
        <i :class="show2 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'" />
        Описание
      </el-button>
      <el-collapse-transition>
        <div v-show="show2">
          <span class="left__description-text">
            {{ issue.description || 'Описание отсутствует' }}
          </span>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssueMainDetails',
  props: {
    issue: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeNames: ['1'],
      show1: true,
      show2: true,
    }
  },
}
</script>

<style scoped lang="scss">
.left {
  min-width: 460px;
  background-color: #fff;
  max-width: 500px;
  &__description {
    box-shadow: 0 18px 10px -23px rgba(0, 0, 0, 0.5); /* Параметры тени */
    margin: 20px;
    border: 1px dashed;
    min-height: 60px;
    padding: 20px;
  }
  &__buttons {
    border: none;
    color: black;
    background-color: white;
  }
  &__row {
    display: flex;
    padding-left: 50px;
  }
  &__column {
    padding: 5px;
    font-size: 14px;
  }
  &__description-text {
    word-wrap: break-word;
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