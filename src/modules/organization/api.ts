import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { CurrentUserOrganizationQuery } from "@/apollo/types";

export const useUserOrganization = () =>
  useQuery<CurrentUserOrganizationQuery>(
    gql`
      query currentUserOrganization {
        currentUser {
          id
          organizations {
            id
            organization {
              name
              id
              profilePictureUrl
              profilePictureHash
            }
          }
        }
      }
    `
  );
