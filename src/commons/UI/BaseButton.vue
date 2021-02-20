<template>
  <button class="button bg-primary rounded-lg text-white font-body">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
}
</style>
