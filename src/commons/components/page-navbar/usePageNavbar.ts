import { computed, ref } from "vue";
import useUser from "@/modules/authentication";
import isEmpty from "@/commons/utils/isEmpty";

export default function usePageNavbar() {
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

  function login() {
    const redirectPage = `${window.location.origin}/login?target=${window.location}`;
    window.location.replace(
      `https://account.it.chula.ac.th/html/login.html?service=${redirectPage}`
    );
  }

  function toggleDropDown() {
    isDropDownShown.value = !isDropDownShown.value;
  }

  function hideDropDown() {
    isDropDownShown.value = false;
  }

  return {
    isLogIn,
    imgUrl,
    nameShown,
    isDropDownShown,
    login,
    toggleDropDown,
    hideDropDown,
    logout
  };
}
