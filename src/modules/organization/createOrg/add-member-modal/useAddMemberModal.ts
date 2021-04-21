import { computed, Ref, SetupContext } from "vue";
import { User } from "@/apollo/types";
import { CLOSE_MODAL, SEARCH, SELECT_MEMBER } from "@/commons/constant";

export default function useAddMemberModal(
  context: SetupContext<("search" | "select-member" | "close-modal")[]>,
  selectedMembers?: Ref<User[] | undefined>,
  orgOwner?: Ref<User | undefined>
) {
  const selectedMembersCount = computed(() => {
    if (selectedMembers && selectedMembers.value)
      return selectedMembers.value.length - 1;
    return 0;
  });

  const memberOrMembers = computed(() => {
    if (
      selectedMembers &&
      selectedMembers.value &&
      selectedMembers.value.length > 1
    )
      return "Members";
    return "Member";
  });

  function isInSelectedMembers(userId: number) {
    return selectedMembers?.value?.some(user => user.id === userId);
  }

  function isOrgOwner(userId: number) {
    return userId === orgOwner?.value?.id;
  }

  function closeModal() {
    context.emit(CLOSE_MODAL);
  }

  function search(value: string) {
    context.emit(SEARCH, value);
  }

  function selectMember(user: User) {
    context.emit(SELECT_MEMBER, user);
  }

  return {
    selectedMembersCount,
    memberOrMembers,
    isInSelectedMembers,
    isOrgOwner,
    closeModal,
    search,
    selectMember
  };
}
