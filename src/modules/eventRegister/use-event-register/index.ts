import {
  Answer,
  CreateJoinRequestAnswerInput,
  CreateJoinRequestInput,
  Question
} from "@/apollo/types";
import useUser from "@/modules/authentication";
import { computed, reactive, ref, watch } from "vue";
import { useEventResgister } from "../api";
import { updateAnswer } from "../api";
import { useRoute, useRouter } from "vue-router";
import { useResult } from "@vue/apollo-composable";

const useEventRegister = () => {
  const { user } = useUser();
  const step = ref(1);
  const questionData = reactive([] as Question[]);
  const { addAnswer } = updateAnswer();
  const route = useRoute();
  const router = useRouter();
  const eventID = Number(route.params.id);
  const { onResult, onError, result } = useEventResgister({ id: eventID });
  const event = useResult(result, null, data => data.event);

  onError(() => {
    router.push("/404");
  });

  onResult(result => {
    if (result.data.event.attendance) {
      router.push("/");
    }
    const questions = result.data.event.questionGroups[0].questions.sort(
      question => question.seq
    );
    Object.assign(questionData, questions);
  });

  const increaseStep = () => {
    step.value++;
  };

  const decreaseStep = () => {
    step.value--;
  };

  const sendAnswer = () => {
    const output: CreateJoinRequestAnswerInput[] = questionData.map(
      question => {
        return {
          questionId: question.id,
          value: question.answer?.value
        };
      }
    );
    const answerData = {
      answers: output,
      eventId: event.value?.id
    } as CreateJoinRequestInput;
    addAnswer({ input: answerData });
    increaseStep();
  };

  const checkStep2 = (step: number) => {
    return step === 2;
  };

  const checkStep3 = (step: number) => {
    return step === 3;
  };

  const getQuestion = (seq: number, eventQuestion: string) => {
    const question = seq + ". " + eventQuestion;
    return question;
  };

  const handleUserAnswer = (id: number, answer: string) => {
    const question = questionData.find(value => value.id === id) as Question;
    question.answer = { value: answer } as Answer;
  };

  const isValidated = computed(
    () =>
      !questionData.find(
        question => !question.isOptional && !question.answer?.value
      )
  );

  return {
    user,
    step,
    increaseStep,
    decreaseStep,
    sendAnswer,
    checkStep2,
    checkStep3,
    handleUserAnswer,
    getQuestion,
    questionData,
    event,
    isValidated
  };
};

export default useEventRegister;
