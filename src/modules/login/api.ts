import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useAuthentication = () => {
  const { mutate: authenticate, onDone, onError } = useMutation(gql`
    mutation authenticate($input: AuthenticateInput!) {
      authenticate(input: $input) {
        accessToken
      }
    }
  `);

  return { authenticate, onDone, onError };
};
