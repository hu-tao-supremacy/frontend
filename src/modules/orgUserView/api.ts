import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {
  GetOrganizationQueryVariables,
  GetOrganizationQuery
} from "@/apollo/types";

export const useOrganizationApi = (variables: GetOrganizationQueryVariables) =>
  useQuery<GetOrganizationQuery>(
    gql`
      query getOrganization($id: Int!) {
        organization(id: $id) {
          id
          name
          isVerified
          description
          facebookPage
          instagram
          lineOfficialAccount
          email
          profilePictureUrl
          profilePictureHash
          events {
            id
            description
            name
            posterImageUrl
            posterImageHash
            durations {
              id
              start
              finish
            }
            location {
              id
              name
            }
          }
        }
      }
    `,
    variables
  );
