<template>
  <button class="btn btn-primary">
    <i :class="['fa fa-2x', icon]"></i>
  </button>
</template>

<script>
export default {
  name: "FabComp",
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
  data() {
      return {
          saludo: 'Hello'
      }
  }
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 20px;
  height: 60px;
  position: fixed;
  right: 20px;
  width: 60px;
}
</style>
