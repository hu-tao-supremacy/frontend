import { createQuestion } from "./../api";
import { computed, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import {
  AnswerType,
  QuestionGroupType,
  SetEventQuestionsInput,
  SetEventQuestionsQuestionGroupInput,
  SetEventQuestionsQuestionInput
} from "@/apollo/types";

const useCreateEventFeedback = () => {
  const sq = ref(0);
  const sqq = ref(0);
  const route = useRoute();
  const eventID = Number(route.params.id);
  const questionGroups = reactive([] as SetEventQuestionsQuestionGroupInput[]);
  const { sendQuestions } = createQuestion();

  const addCategory = () => {
    const seq = sq.value++;
    questionGroups.push({
      type: QuestionGroupType.PostEvent,
      seq: seq,
      title: "",
      questions: [] as SetEventQuestionsQuestionInput[]
    });
    console.log(questionGroups);
  };

  const popCategory = (index: number) => {
    questionGroups.splice(index, 1);
    console.log(questionGroups, "remove");
  };

  const handleUserInput = (index: number, groupTitle: string) => {
    questionGroups[index].title = groupTitle;
    console.log(questionGroups);
  };

  const checkQuestionTypeScale = (type: string) => {
    return type === AnswerType.Scale;
  };
  const addTextQuestion = (index: number) => {
    const seq = sqq.value++;
    questionGroups[index].questions.push({
      seq: seq,
      answerType: AnswerType.Text,
      isOptional: true,
      title: "",
      subtitle: ""
    });
    console.log(questionGroups);
  };
  const addScaleQuestion = (index: number) => {
    const seq = sqq.value++;
    questionGroups[index].questions.push({
      seq: seq,
      answerType: AnswerType.Scale,
      isOptional: true,
      title: "",
      subtitle: ""
    });
    console.log(questionGroups);
  };

  const popQuestion = (groupIndex: number, index: number) => {
    questionGroups[groupIndex].questions.splice(index, 1);
    console.log(questionGroups[groupIndex].questions, "delete");
  };

  const handleQuestionInput = (
    groupIndex: number,
    index: number,
    questionTitle: string
  ) => {
    questionGroups[groupIndex].questions[index].title = questionTitle;
    console.log(questionGroups);
  };

  const resetSequence = (
    questionGroups: SetEventQuestionsQuestionGroupInput[]
  ) => {
    const input = questionGroups.map((category, index) => {
      const newCategory = { ...category };
      newCategory.seq = index + 1;
      newCategory.questions = newCategory.questions.map((question, index) => {
        const newQuestion = { ...question };
        newQuestion.seq = index + 1;
        return newQuestion;
      });
      return newCategory;
    });
    return input;
  };
  const submitQuestions = () => {
    const input = {
      eventId: eventID,
      questionGroups: resetSequence(questionGroups)
    } as SetEventQuestionsInput;
    console.log(input, "input");
    sendQuestions({ input: input });
  };

  const isValidated = computed(
    () =>
      !questionGroups.find(
        group =>
          !group.title ||
          group.questions.length === 0 ||
          group.questions.find(question => !question.title)
      )
  );

  const getCategory = (index: number) => {
    return "Category" + " " + (index + 1);
  };

  const getQuestion = (index: number) => {
    return "Question" + " " + (index + 1);
  };

  return {
    eventID,
    addCategory,
    questionGroups,
    popCategory,
    handleUserInput,
    checkQuestionTypeScale,
    addTextQuestion,
    addScaleQuestion,
    popQuestion,
    handleQuestionInput,
    submitQuestions,
    isValidated,
    getCategory,
    getQuestion
  };
};

export default useCreateEventFeedback;
