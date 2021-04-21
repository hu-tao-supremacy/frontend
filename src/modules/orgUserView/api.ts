import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useOrganizationApi = (variables: { id: number }) =>
  useQuery(
    gql`
      query getOrganization($id: Int!) {
        organization(id: $id) {
          id
          name
          isVerified
          abbreviation
          advisor
          associatedFaculty
          description
          facebookPage
          instagram
          lineOfficialAccount
          email
          contactFullName
          contactEmail
          contactPhoneNumber
          contactLineId
          profilePictureUrl
          profilePictureHash
          events {
            id
          }
        }
      }
    `,
    variables
  );
