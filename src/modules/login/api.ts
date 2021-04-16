import { AuthenticateMutation, MutationAuthenticateArgs } from "@/apollo/types";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useAuthentication = () => {
  const { mutate: authenticate, onDone, onError } = useMutation<
    AuthenticateMutation,
    MutationAuthenticateArgs
  >(gql`
    mutation authenticate($input: AuthenticateInput!) {
      authenticate(input: $input) {
        accessToken
      }
    }
  `);

  return { authenticate, onDone, onError };
};
