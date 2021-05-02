import {
  GetPastEventQuery,
  GetPastEventQueryVariables,
  MutationUpdateUserArgs,
  UpdateUserMutation
} from "@/apollo/types";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { Ref } from "vue";

export const useUpdateUserInfo = () => {
  const {
    mutate: updateUser,
    onDone: onUpdateUserDone,
    onError: onUpdateUserError
  } = useMutation<UpdateUserMutation, MutationUpdateUserArgs>(gql`
    mutation updateUser($input: UpdateUserInput!) {
      updateUser(input: $input) {
        id
      }
    }
  `);

  return { updateUser, onUpdateUserDone, onUpdateUserError };
};

export const setUpdateInterestedEvents = () => {
  const {
    mutate: updateInterest,
    onDone: onUpdateInterestDone
  } = useMutation(gql`
    mutation setInterestedEvents($input: [Int!]!) {
      setInterestedEvents(events: $input)
    }
  `);

  return { updateInterest, onUpdateInterestDone };
};

export const useInterestedEventsCandidate = (
  tagIds: Ref<number[]>,
  enabled: Ref<boolean>
) => {
  console.log(tagIds.value, "value");
  return useQuery<GetPastEventQuery>(
    gql`
      query getPastEvent($n: Int!, $tagIds: [Int!]!) {
        pastEvents(n: $n, tagIds: $tagIds) {
          id
          name
          posterImageUrl
        }
      }
    `,
    () => ({
      n: 12,
      tagIds: tagIds.value
    }),
    () => ({
      enabled: enabled.value
    })
  );
};
