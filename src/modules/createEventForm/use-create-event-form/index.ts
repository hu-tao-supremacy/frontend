import {
  AnswerType,
  QuestionGroupType,
  SetEventQuestionsInput,
  SetEventQuestionsQuestionGroupInput,
  SetEventQuestionsQuestionInput
} from "@/apollo/types";
import { createQuestion } from "../api";
import { useRoute } from "vue-router";
import { computed, reactive, ref } from "vue";

const useCreateEventForm = () => {
  const sqq = ref(0);
  const questions = reactive([] as SetEventQuestionsQuestionInput[]);
  const { sendQuestions } = createQuestion();
  const route = useRoute();
  const eventID = Number(route.params.id);
  const isSuccessModalShown = ref(false);

  const getQuestion = (index: number) => {
    return "Question" + " " + (index + 1);
  };

  const popQuestion = (index: number) => {
    questions.splice(index, 1);
  };

  const handleQuestionInput = (index: number, questionTitle: string) => {
    questions[index].title = questionTitle;
  };

  const addTextQuestion = () => {
    const seq = sqq.value++;
    questions.push({
      seq: seq,
      answerType: AnswerType.Text,
      isOptional: true,
      title: "",
      subtitle: ""
    });
    console.log(questions);
  };

  const resetSequence = (questions: SetEventQuestionsQuestionInput[]) => {
    const input = questions.map((question, index) => {
      const newQuestion = { ...question };
      newQuestion.seq = index + 1;
      return newQuestion;
    });
    return input;
  };

  const submitQuestions = () => {
    const input = {
      eventId: eventID,
      questionGroups: [
        {
          type: QuestionGroupType.PreEvent,
          seq: 1,
          title: "",
          questions: resetSequence(questions)
        }
      ] as SetEventQuestionsQuestionGroupInput[]
    } as SetEventQuestionsInput;
    sendQuestions({ input: input });
  };

  const isValidated = computed(
    () => questions.length !== 0 && !questions.find(question => !question.title)
  );

  function showSuccessModal() {
    isSuccessModalShown.value = true;
  }
  function closeSuccessModal() {
    isSuccessModalShown.value = false;
    //Perform redirect to some other page after create org
    console.log("To team page");
  }
  return {
    getQuestion,
    popQuestion,
    handleQuestionInput,
    addTextQuestion,
    questions,
    submitQuestions,
    isValidated,
    isSuccessModalShown,
    showSuccessModal,
    closeSuccessModal
  };
};

export default useCreateEventForm;
