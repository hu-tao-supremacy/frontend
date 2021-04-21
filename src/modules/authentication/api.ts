import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { GetCurrentUserQuery } from "@/apollo/types";
import { Ref } from "vue";

export const useCurrentUser = (enabled: Ref<boolean>) =>
  useQuery<GetCurrentUserQuery>(
    gql`
      query getCurrentUser {
        currentUser {
          id
          firstName
          lastName
          profilePictureUrl
          didSetup
        }
      }
    `,
    null,
    () => ({
      enabled: enabled.value
    })
  );
