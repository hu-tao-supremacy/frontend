import { ref, computed, Ref } from "vue";
import { User } from "@/apollo/types";
import Fuse from "fuse.js";

const useTable = (data?: Ref<User[] | undefined>) => {
  const searchValue = ref("");
  const sortOption = ref("descending");
  const handleSearch = (value: string) => {
    sortOption.value = "default";
    searchValue.value = value;
  };
  const sortBy = ["Descending alphabets", "Ascending alphabets"];
  const sortByVal = ["descend", "ascend"];
  const header: Record<string, string> = {
    name: "Name",
    email: "Email",
    phoneNumber: "Phone"
  };
  const headerKeys = computed(() => {
    return Object.keys(header);
  });
  const filteredData = computed(() => {
    if (!data?.value) return [];

    const fuse = new Fuse(data.value, {
      keys: ["firstName", "email", "phone"]
    });

    const temp =
      searchValue.value === "" ? data.value : fuse.search(searchValue.value);

    if (temp) {
      switch (sortOption.value) {
        case "descend":
          return temp.sort((a, b) => b.firstName.localeCompare(a.firstName));
        case "ascend":
          return temp.sort((a, b) => a.firstName.localeCompare(b.firstName));
        default:
          return temp;
      }
    }
    return [];
  });

  return {
    sortOption,
    handleSearch,
    header,
    filteredData,
    sortBy,
    sortByVal,
    headerKeys
  };
};

export default useTable;
