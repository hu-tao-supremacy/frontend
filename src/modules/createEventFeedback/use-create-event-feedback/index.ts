import { computed, reactive } from "vue";
import { useRoute } from "vue-router";
import {
  AnswerType,
  QuestionGroupType,
  SetEventQuestionsInput,
  SetEventQuestionsQuestionGroupInput,
  SetEventQuestionsQuestionInput
} from "@/apollo/types";

const useCreateEventFeedback = () => {
  let sq = 0;
  let sqq = 0;
  const route = useRoute();
  const eventID = Number(route.params.id);
  const questionInput = reactive({} as SetEventQuestionsInput);
  const questionGroups = reactive([] as SetEventQuestionsQuestionGroupInput[]);
  const questions = reactive([] as SetEventQuestionsQuestionInput[]);
  questionInput.eventId = eventID;
  questionInput.questionGroups = questionGroups;

  const addCategory = () => {
    sq++;
    questionGroups.push({
      type: QuestionGroupType.PostEvent,
      seq: sq,
      title: "",
      questions: [] as SetEventQuestionsQuestionInput[]
    });
    console.log(questionGroups);
  };

  const popCategory = (index: number) => {
    questionGroups.splice(index, 1);
    console.log(questionGroups, "remove");
  };

  const handleUserInput = (index: number, answer: string) => {
    questionGroups[index].title = answer;
    console.log(questionGroups);
  };

  const checkQuestionTypeScale = (type: string) => {
    return type === AnswerType.Scale;
  };
  const addTextQuestion = (index: number) => {
    sqq++;
    questionGroups[index].questions.push({
      seq: sqq,
      answerType: AnswerType.Text,
      isOptional: true,
      title: "",
      subtitle: ""
    });
    console.log(questionGroups);
  };
  const addScaleQuestion = (index: number) => {
    sqq++;
    questionGroups[index].questions.push({
      seq: sqq,
      answerType: AnswerType.Scale,
      isOptional: true,
      title: "",
      subtitle: ""
    });
    console.log(questionGroups);
  };

  const popQuestion = (gIndex: number, index: number) => {
    questionGroups[gIndex].questions.splice(index, 1);
    console.log(questions, "delete");
  };

  const handleQuestionInput = (
    gIndex: number,
    index: number,
    answer: string
  ) => {
    questionGroups[gIndex].questions[index].title = answer;
    console.log(questionGroups);
  };

  const mapIndex = () => {
    questionGroups.map((category, index) => {
      category.seq = index + 1;
      category.questions.map((question, index) => {
        question.seq = index + 1;
      });
    });
    console.log(questionInput);
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
    mapIndex,
    isValidated
  };
};

export default useCreateEventFeedback;
