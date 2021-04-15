import { computed, ref } from "vue";

export default function useOrgNavbarTeamSelection(orgName: string) {
  const isDropdown = ref(false);

  function collapseDropDown() {
    isDropdown.value = false;
  }

  function toggleDropDown(isSelected: boolean) {
    if (!isSelected) return;
    isDropdown.value = !isDropdown.value;
  }

  function toMemberPage() {
    //Later will put router to go to member page
    console.log("To member");
  }

  function toOrgSetting() {
    //Later will put router to go to org setting page
    console.log("To org setting");
  }

  const orgInitial = computed(() => {
    const wordsSplitList = orgName.split(" ");
    let wordsInitial = "";
    wordsSplitList.forEach(word => {
      wordsInitial = wordsInitial + word.charAt(0).toUpperCase();
    });
    return wordsInitial;
  });

  return {
    isDropdown,
    collapseDropDown,
    toggleDropDown,
    toMemberPage,
    toOrgSetting,
    orgInitial
  };
}
