<template>
  <base-modal maxModalWidth="712px">
    <div class="flex flex-col">
      <h1 class="text-3xl text-blue-11 font-heading">Interests</h1>
      <p class="font-medium text-gray-5">
        Which type of events would you like to join? (Select one or more)
      </p>
      <div class="grid grid-cols-4 auto-rows-auto gap-3">
        <div :v-for="interests" ></div>
      </div>
    </div>
  </base-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseModal from "@/commons/UI/BaseModal.vue";

export default defineComponent({
  name: "ModalInterests",
  components: {
    BaseModal
  },
  setup() {
    const interests = [
      "Music & Festival",
      "Online Event",
      "Stories",
      "Education",
      "IT & Technology",
      "Internship",
      "Investment",
      "Art & Design",
      "Sport",
      "Seft-growth",
      "Gaming",
      "Business",
      "Entertainment",
      "Chula Event"
    ];

    return { interests };
  }
});
</script>
