import { ref, computed, Ref } from "vue";
import { sortAscending, sortDescending } from "@/commons/utils/sort";
import { User } from "@/apollo/types";
import { SortOption } from "./../types";
import Fuse from "fuse.js";

const useTable = (data?: Ref<User[] | undefined>) => {
  const searchValue = ref("");
  const sortingOption = ref(SortOption.Default);
  const handleSearch = (value: string) => {
    sortingOption.value = SortOption.Default;
    searchValue.value = value;
  };
  const sortingName = ["Descending alphabets", "Ascending alphabets"];
  const sortingVal = [SortOption.Descending, SortOption.Ascending];
  const header: Record<string, string> = {
    name: "Name",
    email: "Email",
    phoneNumber: "Phone"
  };

  const fuse = computed(() => {
    if (!data?.value) return;

    return new Fuse(data.value, {
      keys: ["firstName", "email", "phone"]
    });
  });

  const sort = (data: User[]) => () => {
    switch (sortingOption.value) {
      case SortOption.Descending:
        return data.sort((a, b) => sortDescending(a.firstName, b.firstName));
      case SortOption.Ascending:
        return data.sort((a, b) => sortAscending(a.firstName, b.firstName));
      default:
        return data;
    }
  };

  const filteredData = computed(() => {
    if (!data?.value || !fuse.value) return [];

    const searchedData =
      searchValue.value === ""
        ? data.value
        : fuse.value.search(searchValue.value);

    return sort(searchedData);
  });

  return {
    sortingOption,
    handleSearch,
    header,
    filteredData,
    sortingName,
    sortingVal
  };
};

export default useTable;
