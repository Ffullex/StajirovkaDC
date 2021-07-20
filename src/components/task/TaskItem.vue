<template>
  <el-container>
    <el-row class="item" justify="space-between">
      <el-col class="item__col" :span="23">
        <div class="item__element">
          <router-link
            :to="{
              name: 'issueID',
              params: { id: task.project.id },
              query: { selectedIssue: task.id },
            }"
            class="item__link"
            href="#"
          >
            {{ task.id }}
          </router-link>
        </div>
        <div class="item__element">
          <router-link
            :to="{
              name: 'issueID',
              params: { id: task.project.id },
              query: { selectedIssue: task.id },
            }"
            class="item__link"
            href="#"
          >
            <span>{{ task.subject }}</span>
          </router-link>
        </div>
      </el-col>
      <el-col class="item__col--end" :span="1">
        <icon-template :name="task.priority" width="18" height="18" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.item {
  width: 100%;
  padding: 8px;
  background-color: white;
  border-bottom: 1px solid #cacaca;

  &__col {
    display: flex;
    align-content: center;

    &--end {
      display: flex;
      justify-content: flex-end;
    }
  }

  &__element {
    margin-right: 15px;
  }

  &__link {
    text-decoration: none;
    color: $color--secondary;
  }

  &__tag {
    line-height: 20px;
    height: 20px;
  }
}
</style>