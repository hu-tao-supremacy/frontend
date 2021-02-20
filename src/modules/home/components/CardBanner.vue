<template>
  <div class="event-container flex rounded-2xl shadow">
    <div class="w-2/3" :style="img">1</div>
    <div class="w-1/3">2</div>
  </div>
</template>

<script>
export default {
  setup() {
    const img = "";

    return { img };
  }
};
</script>

<style scoped>
.event-container {
  height: 320px;
  background-color: red;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
}
</style>
