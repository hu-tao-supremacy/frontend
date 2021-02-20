<template>
  <footer class="grid grid-cols-4 h-20 bg-blue-11">
    <div></div>
    <div class="col-span-2 flex flex-col items-center text-center py-3">
      <h1 class="font-heading text-4xl text-white mb-1">ONE PASS</h1>
      <div class="w-0.5 h-2 bg-white mb-1 rounded-sm"></div>
      <p class="font-heading text-xl text-primary">HU TAO SUPREMACY</p>
    </div>
    <div
      class="flex flex-col items-end justify-between text-right text-white pr-3 py-1"
    >
      <div class="flex items-center">
        Back to the top
        <base-icon width="16px" height="16px" class="ml-1" iconColor="#FF855F"
          ><ChevronsUpIcon
        /></base-icon>
      </div>
      <div><span class="text-primary">contact :</span> supanut@onepass.app</div>
    </div>
  </footer>
</template>

<script>
import ChevronsUpIcon from "../../assets/ChevronsUp.vue";

export default {
  components: {
    ChevronsUpIcon
  }
};
</script>
