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
import useOrgEvent from "@/modules/organization/event/use-org-event";

const useCreateEventFeedback = () => {
  const sq = ref(0);
  const sqq = ref(0);
  const hasForm = ref(false);
  const route = useRoute();
  const eventID = Number(route.params.id);
  const questionGroups = reactive([] as SetEventQuestionsQuestionGroupInput[]);
  const { sendQuestions, onSendQuestionsDone } = createQuestion();
  const showSucessModal = ref(false);
  const { event } = useOrgEvent();

  const hasCreatedFeedback = computed(() => {
    return event.value?.questionGroups.length !== 0;
  });

  const addCategory = () => {
    const seq = sq.value++;
    questionGroups.push({
      type: QuestionGroupType.PostEvent,
      seq: seq,
      title: "",
      questions: [] as SetEventQuestionsQuestionInput[]
    });
  };

  const popCategory = (index: number) => {
    questionGroups.splice(index, 1);
  };

  const handleUserInput = (index: number, groupTitle: string) => {
    questionGroups[index].title = groupTitle;
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
  };

  const popQuestion = (groupIndex: number, index: number) => {
    questionGroups[groupIndex].questions.splice(index, 1);
  };

  const handleQuestionInput = (
    groupIndex: number,
    index: number,
    questionTitle: string
  ) => {
    questionGroups[groupIndex].questions[index].title = questionTitle;
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
    sendQuestions({ input: input });
  };

  onSendQuestionsDone(() => {
    showSucessModal.value = true;
  });

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

  const toggleForm = () => {
    hasForm.value = !hasForm.value;
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
    getQuestion,
    hasForm,
    toggleForm,
    showSucessModal,
    hasCreatedFeedback
  };
};

export default useCreateEventFeedback;
