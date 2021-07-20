<template>
  <el-container v-if="issues" class="kanban">
    <div v-for="column in columns" :key="column" class="kanban__task-group">
      <div class="kanban__header">
        <span class="kanban__title">{{ column }}</span>
      </div>
      <div class="kanban__column">
        <draggable
          v-model="issues[column]"
          class="kanban__task"
          group="tasks"
          ghost-class="kanban__task--ghost-task"
          item-key="id"
          animation="300"
          @add="drop"
        >
          <div
            v-for="issue in issues[column]"
            :key="issue.id"
            class="kanban__task"
            @click="clickHandle(issue)"
          >
            <task-card :task="issue" :select-issue="selectIssue" />
          </div>
        </draggable>
      </div>
    </div>
  </el-container>
</template>

<script>
import draggable from 'vuedraggable'
import TaskCard from '@/components/task/TaskCard'

export default {
  name: 'KanbanBoard',
  components: {
    TaskCard,
    draggable,
  },
  props: {
    issues: {
      type: Object,
      required: true,
    },
    selectIssue: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      columns: ['TO DO', 'IN PROGRESS', 'MANAGER', 'CLIENT', 'DONE'],
    }
  },
  methods: {
    drop(evt) {
      const group = evt.path[2].children[0].innerText
      const issue = this.issues[group][evt.newIndex]
      const payload = {
        group: group,
        id: issue.id,
      }
      this.$store.dispatch('issues/setStatus', payload)
    },
    clickHandle(task) {
      this.$emit('issueClick', task)
    },
  },
}
</script>

<style scoped lang="scss">
.kanban {
  &__task-group {
    flex-grow: 1;
    float: left;
    width: 100%;
    min-width: 300px;
    min-height: 600px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  &__column {
    height: 100%;
    width: 100%;
    background-color: $color--background;
    padding: 5px;
    overflow-y: auto;
  }

  &__task {
    min-height: 100%;
    width: 100%;

    &--select {
      background-color: #0052cc;
    }

    &--ghost-task {
      opacity: 0.5;
    }
  }
}
</style>

