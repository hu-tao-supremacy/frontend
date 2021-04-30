import { login } from "@/commons/utils/auth";

const useEventOrganizer = (isSignIn: boolean) => {
  const follow = () => {
    console.log("follow");
    if (!isSignIn) {
      login();
    } else {
      console.log("Follow with api");
    }
  };

  return { follow };
};

export default useEventOrganizer;
