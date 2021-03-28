import { testData } from "./testData";
import { reactive, ref, watch } from "vue";
import { useUpcomingEvents } from "../api";
import { useResult } from "@vue/apollo-composable";

const useHome = () => {
    const state = reactive(testData);
    const showModal = ref(false);
    const { result } = useUpcomingEvents();

    const upcomingEvents = useResult(result);


    function toggleModal() {
        showModal.value = !showModal.value;
    }

    return { state, showModal, toggleModal, upcomingEvents }
}

export default useHome