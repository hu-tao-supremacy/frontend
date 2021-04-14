import { login } from "@/commons/utils/auth";
import useUser from "@/modules/authentication";

const useEventOrganizer = () => {
  const { isSignIn } = useUser();
  const follow = () => {
    console.log("follow");
    if (!isSignIn.value) {
      login();
    } else {
      console.log("Follow with api");
    }
  };

  return { follow };
};

export default useEventOrganizer;
