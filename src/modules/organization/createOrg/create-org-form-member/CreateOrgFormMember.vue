<template>
  <div class="w-20 flex-shrink-0">
    <h1 class="font-heading text-xl mb-2 mr-6">Member</h1>
    <p>Organization member</p>
    <div class="flex -space-x-1 overflow-hidden">
      <UserProfile
        v-for="member in memberProfilesShown"
        :key="member.id"
        :user="member"
        :hasBorder="false"
        widthHeight="w-6 h-6"
        class="ring-2 ring-white"
      />
      <span
        @click="showAddMemberModal"
        class="flex justify-center items-center w-6 h-6 rounded-full overflow-hidden ring-2 ring-white bg-primary-3 cursor-pointer"
        ><base-icon :width="24" :height="24" class="text-primary"
          ><PlusIcon /></base-icon
      ></span>
    </div>
  </div>
  <AddMemberModal
    v-show="isAddMemberModalShown"
    v-click-outside="hideAddMemberModal"
    @close-modal="hideAddMemberModal"
    @search="searchUsers"
    @select-member="modifySelectedMember"
    :searchedUsers="searchedUsers"
    :selectedMembers="selectedMembers"
    :orgOwner="orgOwner"
    class="absolute left-0 top-15 z-10"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import AddMemberModal from "../add-member-modal/AddMemberModal.vue";
import UserProfile from "@/commons/UI/user-profile/UserProfile.vue";
import PlusIcon from "@/assets/Plus.vue";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import { User } from "@/apollo/types";
import useCreateOrgFormMember from "./useCreateOrgFormMember";

export default defineComponent({
  name: "CreateOrgFormOrganizationDetail",
  components: {
    AddMemberModal,
    UserProfile,
    PlusIcon
  },
  props: {
    orgOwner: {
      type: Object as () => User
    },
    modelValue: {
      type: Array as PropType<Array<User>>,
      required: true
    }
  },
  emits: [UPDATE_MODEL_VALUE],
  setup(props, context) {
    const { modelValue } = toRefs(props);
    const {
      selectedMembers,
      isAddMemberModalShown,
      isAddMemberModalJustShown,
      searchedUsers,
      memberProfilesShown,
      showAddMemberModal,
      hideAddMemberModal,
      searchUsers,
      modifySelectedMember
    } = useCreateOrgFormMember(modelValue, context);

    return {
      selectedMembers,
      isAddMemberModalShown,
      isAddMemberModalJustShown,
      searchedUsers,
      memberProfilesShown,
      showAddMemberModal,
      hideAddMemberModal,
      searchUsers,
      modifySelectedMember
    };
  }
});
</script>
