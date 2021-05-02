import { AnswerType, QuestionGroup } from "@/apollo/types";
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useEvents } from "../api";

const useEventFeedback = () => {
  const questionGroupData = reactive([] as QuestionGroup[]);
  const eventName = ref("");
  const route = useRoute();
  const eventId = Number(route.params.id);
  const { onResult } = useEvents({
    id: eventId
  });
  const placeholder = "Write your answer here!";

  const checkQuestionTypeScale = (type: string) => {
    return type === AnswerType.Scale;
  };

  onResult(result => {
    Object.assign(questionGroupData, result.data.event.questionGroups);
    eventName.value = result.data.event.name;
  });
  return {
    checkQuestionTypeScale,
    questionGroupData,
    eventName,
    placeholder
  };
};

export default useEventFeedback;
