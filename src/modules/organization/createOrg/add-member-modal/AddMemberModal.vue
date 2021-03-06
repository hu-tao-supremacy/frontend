<template>
  <div
    class="modal-max-width flex flex-col py-2 px-3 rounded-2xl shadow bg-white overflow-hidden"
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
        <span class="text-primary">{{ selectedMembersCount }}</span>
        {{ memberOrMembersText }}
        selected
      </p>
    </section>
    <section class="member-selection-max-height h-full overflow-y-auto">
      <AddMemberSelection
        v-for="(user, index) in searchedUsers"
        :key="index"
        @select-member="selectMember(user)"
        :user="user"
        :isSelected="isInSelectedMembers(user.id)"
        :isOrgOwner="isOrgOwner(user.id)"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import BaseSearch from "@/commons/UI/BaseSearch.vue";
import BaseTransparentButton from "@/commons/UI/BaseTransparentButton.vue";
import AddMemberSelection from "../add-member-selection/AddMemberSelection.vue";
import XIcon from "@/assets/X.vue";
import { CLOSE_MODAL, SEARCH, SELECT_MEMBER } from "@/commons/constant";
import { User } from "@/apollo/types";
import useAddMemberModal from "./useAddMemberModal";

export default defineComponent({
  name: "AddMemberModal",
  components: {
    BaseSearch,
    BaseTransparentButton,
    AddMemberSelection,
    XIcon
  },
  props: {
    selectedMembers: {
      type: Array as PropType<Array<User>>,
      required: true
    },
    searchedUsers: {
      type: Array as PropType<Array<User>>
    },
    orgOwner: {
      type: Object as () => User
    }
  },
  emits: [CLOSE_MODAL, SEARCH, SELECT_MEMBER],
  setup(props, context) {
    const { selectedMembers, orgOwner } = toRefs(props);

    const {
      selectedMembersCount,
      memberOrMembersText,
      isInSelectedMembers,
      isOrgOwner,
      closeModal,
      search,
      selectMember
    } = useAddMemberModal(context, selectedMembers, orgOwner);

    return {
      selectedMembersCount,
      memberOrMembersText,
      isInSelectedMembers,
      isOrgOwner,
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
