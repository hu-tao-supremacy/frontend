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
          phoneNumber
          email
          chulaId
          academicYear
          district
          province
          zipCode
          address
          profilePictureUrl
          didSetup
          gender
          history {
            id
            name
            durations {
              id
              start
              finish
            }
            posterImageUrl
            posterImageHash
            organization {
              id
              name
              abbreviation
              profilePictureUrl
              profilePictureHash
            }
            location {
              id
              name
            }
            tags {
              id
              name
            }
            attendance {
              id
              ticket
              status
            }
          }
        }
      }
    `,
    null,
    () => ({
      enabled: enabled.value
    })
  );
