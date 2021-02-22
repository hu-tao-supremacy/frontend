import { ref } from "vue";

export default function usePageNavbar() {
  const isLogIn = ref(false);
  const imgUrl = "https://picsum.photos/50";
  const fname = "Supanut ";
  const lname = "Phonampai";
  const nameShown = fname + lname.charAt(0) + ".";

  function login() {
    isLogIn.value = true;
  }

  return { isLogIn, login, imgUrl, nameShown };
}
