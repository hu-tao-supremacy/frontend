import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {
  GetOrganizationMemberQuery,
  GetOrganizationQueryVariables
} from "@/apollo/types";

export const useMemberManagementApi = (
  variables: GetOrganizationQueryVariables
) =>
  useQuery<GetOrganizationMemberQuery>(
    gql`
      query getOrganizationMember($id: Int!) {
        organization(id: $id) {
          userOrganizations {
            user {
              id
              firstName
              lastName
              email
              phoneNumber
              profilePictureUrl
            }
          }
        }
      }
    `,
    variables
  );
