<template>
  <div class="grid grid-cols-3 rounded-2xl bg-primary h-80">
    <div
      class="col-span-2 bg-no-repeat bg-cover rounded-l-2xl"
      :style="{ backgroundImage: `url(${img})` }"
    ></div>
    <div class="col-span-1 flex p-3 leading-3 text-xs">
      <div>
        qweqeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeee eeeeeeeeeeeeee eeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeee
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const img = "https://picsum.photos/200";

    return { img };
  }
};
</script>

<style scoped>
.event-container {
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
}
</style>
