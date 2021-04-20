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
        @search="search"
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
        v-for="(user, index) in searchedUsers"
        :key="index"
        @select-member="selectMember(user.email)"
        :user="user"
        :isSelected="isInSelectedMembers(user.email)"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import AddMemberSelection from "../add-member-selection/AddMemberSelection.vue";
import XIcon from "@/assets/X.vue";
import { CLOSE_MODAL, SEARCH, SELECT_MEMBER } from "@/commons/constant";
import { User } from "@/apollo/types";

export default defineComponent({
  name: "AddMemberModal",
  components: {
    BaseSearch,
    BaseTransparentButton,
    AddMemberSelection,
    XIcon
  },
  props: {
    selectedMemberEmails: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    searchedUsers: {
      type: Array as PropType<Array<User>>
    }
  },
  emits: [CLOSE_MODAL, SEARCH, SELECT_MEMBER],
  setup(props, context) {
    const { selectedMemberEmails } = toRefs(props);

    const selectedMembersCount = computed(() => {
      return selectedMemberEmails.value.length;
    });

    function isInSelectedMembers(userEmail: string) {
      return selectedMemberEmails.value.some(email => email === userEmail);
    }

    function closeModal() {
      context.emit(CLOSE_MODAL);
    }

    function search(value: string) {
      context.emit(SEARCH, value);
    }

    function selectMember(userEmail: string) {
      const isSelected = isInSelectedMembers(userEmail);
      context.emit(SELECT_MEMBER, userEmail, isSelected);
    }

    return {
      selectedMembersCount,
      isInSelectedMembers,
      closeModal,
      search,
      selectMember
    };
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
