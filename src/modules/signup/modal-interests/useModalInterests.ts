import { CLOSE_MODAL } from "@/commons/constant";
import { SUBMIT_MODAL } from "../constant";
import { Ref, ref, SetupContext } from "vue";

export default function useModalInterests(
  context: SetupContext<("close-modal" | "submit-modal")[]>
) {
  const selectedInterestIDs: Ref<number[]> = ref([]);

  function toggleInterest(id: number) {
    const index = selectedInterestIDs.value.findIndex(
      interestID => interestID === id
    );
    if (index === -1) selectedInterestIDs.value.push(id);
    else selectedInterestIDs.value.splice(index, 1);
  }

  function isSelected(id: number) {
    return selectedInterestIDs.value.includes(id);
  }

  function closeModal() {
    context.emit(CLOSE_MODAL);
  }

  function submitInterest() {
    context.emit(SUBMIT_MODAL, selectedInterestIDs.value);
  }

  return { toggleInterest, isSelected, submitInterest, closeModal };
}
