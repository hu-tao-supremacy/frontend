import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useUpdateUserInfo = () => {
  const {
    mutate: updateUser,
    onDone: onUpdateUserDone,
    onError: onUpdateUserErrror
  } = useMutation(gql`
    mutation updateUser($input: UpdateUserInput!) {
      updateUser(input: $input) {
        id
      }
    }
  `);

  return { updateUser, onUpdateUserDone, onUpdateUserErrror };
};
