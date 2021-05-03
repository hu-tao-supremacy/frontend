import { computed, reactive, ref, Ref, SetupContext, watch } from "vue";
import { User } from "@/apollo/types";
import { UPDATE_MODEL_VALUE } from "@/commons/constant";
import { useSearchUser } from "../api";
import { useResult } from "@vue/apollo-composable";

export default function useCreateOrgFormMember(
  initialSelectedMembers: Ref<User[]>,
  context: SetupContext<"update:modelValue"[]>
) {
  const selectedMembers = ref(initialSelectedMembers.value);
  const isAddMemberModalShown = ref(false);
  //Trick variable to bypass hiding modal from v-click-outside of AddMemberModal component
  const isAddMemberModalJustShown = ref(false);

  const searchKeyword = reactive({ input: "" });
  const { result: searchUserResult } = useSearchUser(searchKeyword);
  const searchedUsers = useResult(
    searchUserResult,
    [],
    data => data.searchUser
  );

  const memberProfilesShown = computed(() => {
    if (selectedMembers.value.length <= 3) return selectedMembers.value;
    return selectedMembers?.value.slice(0, 3);
  });

  function showAddMemberModal() {
    isAddMemberModalShown.value = true;
    isAddMemberModalJustShown.value = true;
  }

  function hideAddMemberModal() {
    if (isAddMemberModalJustShown.value) {
      isAddMemberModalJustShown.value = false;
      return;
    }
    isAddMemberModalShown.value = false;
  }

  function searchUsers(value: string) {
    searchKeyword.input = value;
  }

  function addMember(user: User) {
    selectedMembers.value.push(user);
  }

  function removeMember(index: number) {
    selectedMembers.value.splice(index, 1);
  }

  function modifySelectedMember(user: User) {
    const memberIndex = selectedMembers.value.findIndex(
      member => member.id === user.id
    );
    if (memberIndex === -1) addMember(user);
    else removeMember(memberIndex);
  }

  watch(
    () => selectedMembers,
    () => {
      context.emit(UPDATE_MODEL_VALUE, selectedMembers.value);
    },
    { deep: true }
  );

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
