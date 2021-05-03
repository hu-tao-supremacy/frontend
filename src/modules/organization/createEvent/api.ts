import { useQuery, useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {
  GetAllTagsQuery,
  CreateEventMutation,
  MutationCreateEventArgs
} from "@/apollo/types";

export const useEventInfoFormApi = () =>
  useQuery<GetAllTagsQuery>(gql`
    query getAllTags {
      tags {
        id
        name
      }
    }
  `);

export const useCreateEventApi = () => {
  const { mutate: createEvent, onDone } = useMutation<
    CreateEventMutation,
    MutationCreateEventArgs
  >(gql`
    mutation createEvent($input: CreateEventInput!) {
      createEvent(input: $input) {
        id
      }
    }
  `);
  return { createEvent, onDone };
};
