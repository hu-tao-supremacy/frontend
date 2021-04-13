import { User } from "@/apollo/types";
import { computed } from "vue";

const useUserProfile = (user: User) => {
  const initial = computed(() => {
    return `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`;
  });

  return { initial };
};

export default useUserProfile;
