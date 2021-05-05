import useOrganization from "@/modules/organization/useOrganization";
import { Ref, ref } from "vue";
import { useRouter } from "vue-router";

export default function useOrgNavbarTeamSelection(
  isExpand: Ref<boolean>,
  isSelected: Ref<boolean>
) {
  const isDropdown = ref(false);
  const router = useRouter();
  const { currentOrganizationId: currentSelectedTeamId } = useOrganization();
  function collapseDropDown() {
    isDropdown.value = false;
  }

  function toggleDropDown() {
    if (!isSelected.value || !isExpand.value) return;
    isDropdown.value = !isDropdown.value;
  }

  function toMemberPage() {
    router.push(`/member-management/${currentSelectedTeamId.value}`);
  }

  return {
    isDropdown,
    collapseDropDown,
    toggleDropDown,
    toMemberPage
  };
}
