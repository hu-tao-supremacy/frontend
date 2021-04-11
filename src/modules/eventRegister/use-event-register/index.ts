import useUser from "@/modules/authentication";
import { reactive, ref } from "vue";
import { useQuestions } from "../api";
import { QuestionWithAnswer } from "./type";

const useEventRegister = () => {
  const { user } = useUser();
  const step = ref(1);
  const questionData = reactive([] as QuestionWithAnswer[]);

  const increaseStep = () => {
    step.value++;
  };
  const decreaseStep = () => {
    step.value--;
  };
  const checkStep2 = (step: number) => {
    if (step === 2) {
      return true;
    }
    return false;
  };
  const checkStep3 = (step: number) => {
    if (step === 3) {
      return true;
    }
    return false;
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
    console.log(questionData);
  };
  const { result: questions, onResult } = useQuestions();

  onResult(result => {
    Object.assign(questionData, result.data.event.questionGroups[0].questions);
  });

  return {
    user,
    step,
    increaseStep,
    decreaseStep,
    checkStep2,
    checkStep3,
    handleUserAnswer,
    getQuestion,
    questionData,
    questions
  };
};

export default useEventRegister;
