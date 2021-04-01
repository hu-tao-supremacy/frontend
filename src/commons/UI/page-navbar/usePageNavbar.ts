import { ref } from "vue";

export default function usePageNavbar() {
  const isLogIn = ref(false);
  const imgUrl = "https://picsum.photos/50";
  const imgHash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";
  const fname = "Supanut";
  const lname = "Phonampai";
  const nameShown = fname + " " + lname.charAt(0) + ".";
  const isDropDownShown = ref(false);

  function login() {
    //Perform login procedure
    isLogIn.value = true;
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
    isLogIn.value = false;
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
