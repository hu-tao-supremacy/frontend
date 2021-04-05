import { ref } from "vue";
import useUser from "@/modules/authentication";

export default function usePageNavbar() {
  const { isSignIn: isLogIn, logout: performLogout } = useUser();
  const imgUrl = "https://picsum.photos/50";
  const imgHash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";
  const fname = "Supanut";
  const lname = "Phonampai";
  const nameShown = fname + " " + lname.charAt(0) + ".";
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

  function logout() {
    //Perform logout procedure
    hideDropDown();
    performLogout();
  }

  return {
    isLogIn,
    imgUrl,
    imgHash,
    nameShown,
    isDropDownShown,
    login,
    toggleDropDown,
    hideDropDown,
    logout
  };
}
