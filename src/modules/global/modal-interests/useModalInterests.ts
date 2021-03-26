import { CLOSE_MODAL } from "@/commons/constant";
import { SetupContext } from "vue";

export default function useModalInterests(
  context: SetupContext<"close-modal"[]>
) {
  const selectedInterestIDs: number[] = [];

  function toggleInterest(id: number) {
    const index = selectedInterestIDs.findIndex(
      interestID => interestID === id
    );
    if (index === -1) selectedInterestIDs.push(id);
    else selectedInterestIDs.splice(index, 1);
  }

  function submitInterest() {
    //something to do with API
    console.log(selectedInterestIDs);
  }

  function closeModal() {
    context.emit(CLOSE_MODAL);
  }

  return { toggleInterest, submitInterest, closeModal };
}
