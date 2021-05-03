import {
  AnswerType,
  CreateJoinRequestAnswerInput,
  QuestionGroup
} from "@/apollo/types";
import { computed, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSubmitEventFeedback, useEvents } from "../api";

const useEventFeedback = () => {
  const questionGroupData = reactive([] as QuestionGroup[]);
  const eventName = ref("");
  const route = useRoute();
  const eventId = Number(route.params.id);
  const { onResult } = useEvents({
    id: eventId
  });
  const placeholder = "Write your answer here!";
  const { submitFeedback, onSubmitFeedbackDone } = useSubmitEventFeedback();
  const currentRating = ref(-1);
  const answers = ref<CreateJoinRequestAnswerInput[]>([]);
  const router = useRouter();

  const checkQuestionTypeScale = (type: string) => {
    return type === AnswerType.Scale;
  };

  const updateAnswer = (id: number, answer: string | number) => {
    const index = answers.value.findIndex(answer => answer.questionId === id);
    const ans = { questionId: id, value: String(answer) };
    if (index === -1) {
      answers.value.push(ans);
    } else if (String(answer) === "") {
      answers.value.splice(index, 1);
    } else {
      answers.value[index] = ans;
    }
  };

  const submitEventFeedback = () => {
    const input = {
      eventId,
      rating: currentRating.value,
      answers: answers.value
    };
    submitFeedback({ input });
  };

  onSubmitFeedbackDone(() => {
    router.push("/wallet");
  });

  const changeRating = (rating: number) => {
    currentRating.value = rating;
  };

  onResult(result => {
    Object.assign(questionGroupData, result.data.event.questionGroups);
    eventName.value = result.data.event.name;
  });

  const isValidated = computed(() => {
    const questionLength = questionGroupData.flatMap(group => group.questions)
      .length;
    return (
      currentRating.value !== -1 && answers.value.length === questionLength
    );
  });

  return {
    checkQuestionTypeScale,
    questionGroupData,
    eventName,
    placeholder,
    submitEventFeedback,
    changeRating,
    updateAnswer,
    isValidated
  };
};

export default useEventFeedback;
