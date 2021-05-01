import { Ref, ref } from "vue";

export default function useOrgNavbarTeamSelection(
  isExpand: Ref<boolean>,
  isSelected: Ref<boolean>
) {
  const isDropdown = ref(false);

  function collapseDropDown() {
    isDropdown.value = false;
  }

  function toggleDropDown() {
    if (!isSelected.value || !isExpand.value) return;
    isDropdown.value = !isDropdown.value;
  }

  function toMemberPage() {
    //Later will put router link to go to member page
    console.log("To member");
  }

  function toOrgSetting() {
    //Later will put router link to go to org setting page
    console.log("To org setting");
  }

  return {
    isDropdown,
    collapseDropDown,
    toggleDropDown,
    toMemberPage,
    toOrgSetting
  };
}
