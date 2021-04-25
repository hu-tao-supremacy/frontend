import { ref, computed, Ref } from "vue";
import { User } from "@/apollo/types";

const useTable = (data?: Ref<User[] | undefined>) => {
  const searchValue = ref("");
  const sortOption = ref("descending");
  const handleSearch = (value: string) => {
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
    const temp = data?.value?.filter(row => {
      let searchRow = "";
      if (searchValue.value.includes("@")) {
        searchRow = `${row?.email}`;
      } else {
        searchRow = `${row?.firstName} ${row?.lastName}`;
      }
      return searchRow.toLowerCase().includes(searchValue.value.toLowerCase());
    });

    if (temp) {
      switch (sortOption.value) {
        case "descend":
          temp.sort();
          break;
        case "ascend":
          temp.sort().reverse();
          break;
        case "pending":
          break;
        case "approved":
          break;
      }
      return temp;
    } else {
      return [];
    }
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
