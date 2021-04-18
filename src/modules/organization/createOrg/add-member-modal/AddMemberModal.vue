<template>
  <div
    class="modal-max-width flex flex-col py-2 px-3 rounded-2xl shadow bg-white overflow-hidden z-10"
  >
    <section class="flex justify-between mb-1">
      <h1 class="font-heading text-lg">Select Member</h1>
      <base-transparent-button @click="closeModal">
        <base-icon :width="24" :height="24"><XIcon /></base-icon>
      </base-transparent-button>
    </section>
    <section class="flex items-center justify-between mb-0.5">
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
    <section class="member-selection-max-height h-full overflow-y-auto">
      <AddMemberSelection
        v-for="(member, index) in members"
        :key="index"
        :user="member"
        :isSelected="false"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import AddMemberSelection from "../add-member-selection/AddMemberSelection.vue";
import XIcon from "@/assets/X.vue";
import { CLOSE_MODAL } from "@/commons/constant";
import testData from "@/modules/test/testData";

export default defineComponent({
  name: "AddMemberModal",
  components: {
    BaseSearch,
    BaseTransparentButton,
    AddMemberSelection,
    XIcon
  },
  emits: [CLOSE_MODAL],
  setup(_, context) {
    const selectedMembersCount = 24;
    const user = testData.user;
    const members = [user, user, user, user, user, user];

    function closeModal() {
      context.emit(CLOSE_MODAL);
    }

    return { selectedMembersCount, closeModal, members };
  }
});
</script>

<style scoped>
.modal-max-width {
  max-width: 480px;
}

.member-selection-max-height {
  max-height: 236px;
}
</style>
