import useUser from "@/modules/authentication";
import { watch } from "vue";
export default function usePageNavbar() {
  const { isSignIn: isLogIn, logout, user } = useUser();
  const imgUrl = user.value.profilePictureUrl;
  const nameShown = user.value.firstName + user.value.lastName?.charAt(0) + ".";

  function login() {
    const redirectPage = `${window.location.origin}/login?target=${window.location}`;
    window.location.replace(
      `https://account.it.chula.ac.th/html/login.html?service=${redirectPage}`
    );
  }

  return { isLogIn, login, imgUrl, nameShown, logout };
}
