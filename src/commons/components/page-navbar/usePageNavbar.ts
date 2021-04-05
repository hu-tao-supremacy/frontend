import useUser from "@/modules/authentication";
export default function usePageNavbar() {
  const { isSignIn: isLogIn, logout } = useUser();
  const imgUrl = "https://picsum.photos/50";
  const fname = "Supanut ";
  const lname = "Phonampai";
  const nameShown = fname + lname.charAt(0) + ".";

  function login() {
    const redirectPage = `${window.location.origin}/login?target=${window.location}`;
    window.location.replace(
      `https://account.it.chula.ac.th/html/login.html?service=${redirectPage}`
    );
  }

  return { isLogIn, login, imgUrl, nameShown, logout };
}
