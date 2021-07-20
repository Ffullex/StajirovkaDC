<template>
  <svg
    class="app-icon"
    :class="iconClass"
    :width="width"
    :height="height"
    aria-hidden="true"
  >
    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="href"></use>
  </svg>
</template>

<script>
export default {
  name: 'IconTemplate',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String],
    },
  },

  computed: {
    href() {
      return `#${this.name}`
    },

    iconClass() {
      return `app-icon--${this.name}`
    },
  },
}
</script>

<style scoped lang="scss">
.app-icon {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
</style>
