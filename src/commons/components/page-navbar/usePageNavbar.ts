import { computed, ref } from "vue";
import useUser from "@/modules/authentication";
import isEmpty from "@/commons/utils/isEmpty";
import router from "@/router";

export default function usePageNavbar(isOrgView: boolean) {
  const { isSignIn: isLogIn, logout, user } = useUser();
  const imgUrl = computed(() => {
    return user.value.profilePictureUrl;
  });
  const nameShown = computed(() => {
    if (isEmpty(user.value)) {
      return "";
    }
    return `${user.value.firstName} ${user.value.lastName?.charAt(0)}.`;
  });
  const isDropDownShown = ref(false);

  const homePage = computed(() => {
    if (isOrgView) return "/org/team";
    return "/";
  });

  function toggleDropDown() {
    isDropDownShown.value = !isDropDownShown.value;
  }

  function hideDropDown() {
    isDropDownShown.value = false;
  }

  function searchEvent(searchInput: string) {
    router.push({ name: "Search", query: { q: searchInput } });
  }

  return {
    isLogIn,
    imgUrl,
    nameShown,
    isDropDownShown,
    user,
    homePage,
    toggleDropDown,
    hideDropDown,
    logout,
    searchEvent
  };
}
