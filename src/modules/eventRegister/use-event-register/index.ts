import {
  CreateJoinRequestAnswerInput,
  CreateJoinRequestInput
} from "./../../../apollo/types";
import useUser from "@/modules/authentication";
import { reactive, ref } from "vue";
import { useQuestions } from "../api";
import { QuestionWithAnswer } from "./type";
import { updateAnswer } from "../api";
import { useRoute, useRouter } from "vue-router";

const useEventRegister = () => {
  const { user } = useUser();
  const step = ref(1);
  const questionData = reactive([] as QuestionWithAnswer[]);
  const answerData = reactive({} as CreateJoinRequestInput);
  const { addAnswer } = updateAnswer();
  const route = useRoute();
  const router = useRouter();
  const eventID = Number(route.params.id);
  const { onResult, onError } = useQuestions({ id: eventID });

  onError(err => {
    router.push("/404");
  });

  onResult(result => {
    Object.assign(questionData, result.data.event.questionGroups[0].questions);
    answerData.eventId = result.data.event.questionGroups[0].eventId;
  });

  const increaseStep = () => {
    step.value++;
  };

  const decreaseStep = () => {
    step.value--;
  };

  const sendAnswer = () => {
    step.value++;
    const output = questionData.map(question => {
      return {
        questionId: question.id,
        value: question.answer
      } as CreateJoinRequestAnswerInput;
    });
    answerData.answers = output;
    addAnswer({ input: answerData });
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
    const question = questionData.find(
      value => value.id === id
    ) as QuestionWithAnswer;
    question.answer = answer;
  };

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
    questionData
  };
};

export default useEventRegister;
