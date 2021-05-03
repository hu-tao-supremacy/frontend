import {
  MutationSetEventQuestionsArgs,
  SetEventQuestionsInput
} from "@/apollo/types";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const createQuestion = () => {
  const { mutate: sendQuestions, onDone } = useMutation<
    SetEventQuestionsInput,
    MutationSetEventQuestionsArgs
  >(gql`
    mutation setEventQuestions($input: SetEventQuestionsInput!) {
      setEventQuestions(input: $input)
    }
  `);
  return { sendQuestions, onDone };
};
