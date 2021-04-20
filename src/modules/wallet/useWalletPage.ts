import { useResult } from "@vue/apollo-composable";
import { useWalletApi } from "./api";

const useWalletPage = () => {
  const { result } = useWalletApi();
  const userWalletProfile = useResult(result, null, data => data.currentUser);

  return { userWalletProfile };
};

export default useWalletPage;
