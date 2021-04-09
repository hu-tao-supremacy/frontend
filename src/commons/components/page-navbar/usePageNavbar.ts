import isEmpty from "@/commons/utils/isEmpty";
import useUser from "@/modules/authentication";
import { computed } from "vue";

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

  function login() {
    const redirectPage = `${window.location.origin}/login?target=${window.location}`;
    window.location.replace(
      `https://account.it.chula.ac.th/html/login.html?service=${redirectPage}`
    );
  }

  return { isLogIn, login, imgUrl, nameShown, logout, user };
}
