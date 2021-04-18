<template>
  <div class="flex flex-col py-2 px-3 rounded-2xl shadow overflow-hidden z-10">
    <section class="flex justify-between mb-1">
      <h1 class="font-heading text-lg">Select Member</h1>
      <base-transparent-button @click="closeModal">
        <base-icon :width="24" :height="24"><XIcon /></base-icon>
      </base-transparent-button>
    </section>
    <section class="flex justify-between">
      <BaseSearch
        class="w-full h-2.5"
        inputClass="w-full text-sm"
        searchButtonClass="w-4"
        placeholder="Search member"
      />
      <p class="text-sm flex-shrink-0 ml-4">
        <span class="text-primary">{{ selectedMembersCount }}</span> Member
        selected
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import XIcon from "@/assets/X.vue";
import { CLOSE_MODAL } from "@/commons/constant";

export default defineComponent({
  name: "AddMemberModal",
  components: {
    BaseSearch,
    BaseTransparentButton,
    XIcon
  },
  emits: [CLOSE_MODAL],
  setup(_, context) {
    const selectedMembersCount = 24;

    function closeModal() {
      context.emit(CLOSE_MODAL);
    }

    return { selectedMembersCount, closeModal };
  }
});
</script>
