import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { GetCurrentUserQuery } from "@/apollo/types";
import { Ref } from "vue";

export const useCurrentUser = (enabled: Ref<boolean>) =>
  useQuery<GetCurrentUserQuery>(
    gql`
      query getCurrentUser {
        currentUser {
          firstName
          lastName
          phoneNumber
          email
          chulaId
          district
          province
          zipCode
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
