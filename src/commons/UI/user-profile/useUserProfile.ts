import { User } from "@/apollo/types";
import { computed, Ref } from "vue";

const useUserProfile = (user?: Ref<User | undefined>) => {
  const initial = computed(() => {
    return `${user?.value?.firstName.charAt(0)}${user?.value?.lastName.charAt(
      0
    )}`;
  });

  return { initial };
};

export default useUserProfile;
