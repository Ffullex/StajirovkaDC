<template>
  <div class="task" :class="{ 'task--select': selectIssue === task.id }">
    <el-row class="task__row">
      <el-col class="task__info" :span="21">
        <div class="task__element">
          <router-link
            :to="{
              name: 'issueID',
              params: { id: task.project.id },
              query: { selectedIssue: task.id },
            }"
            class="task__link"
            href="#"
          >
            <span class="task__id">{{ task.id }}</span>
          </router-link>
        </div>
        <div class="task__element">
          <router-link
            :to="{
              name: 'issueID',
              params: { id: task.project.id },
              query: { selectedIssue: task.id },
            }"
            class="task__title"
            href="#"
          >
            {{ task.subject }}
          </router-link>
        </div>
      </el-col>
      <el-col :span="3">
        <img src="@/assets/profile.svg" width="30" alt="profile" />
      </el-col>
    </el-row>
    <el-row class="task__row">
      <el-col class="task__element">
        <img
          :src="require(`@/assets/priority/${task.priority}.svg`)"
          width="16"
          :alt="task.priority"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: {
      type: Object,
      required: true,
    },
    selectIssue: {
      type: Number,
      required: false,
    },
  },
}
</script>

<style scoped lang="scss">
.task {
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #fff;
  cursor: move;

  &:hover {
    background-color: #ecf5ff;
  }

  &--select {
    background-color: #c6deff;
  }

  &__link {
    cursor: pointer;
    color: $color--fonts;
    font-weight: bold;
  }

  &__row {
    margin-top: 5px;
  }

  &__title {
    word-wrap: break-word;
    text-decoration: none;
    color: black;
  }

  &__element {
    margin-top: 5px;
  }
}
</style>