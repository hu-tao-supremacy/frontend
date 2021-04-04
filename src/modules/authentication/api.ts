import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { User } from "@/apollo/types";
import { Ref } from "vue";

export const useCurrentUser = (enabled: Ref<boolean>) =>
  useQuery<User>(
    gql`
      query getCurrentUser {
        currentUser {
          firstName
          lastName
          email
          chulaId
          address
          profilePictureUrl
          didSetup
          gender
        }
      }
    `,
    null,
    () => ({
      enabled: enabled.value
    })
  );
