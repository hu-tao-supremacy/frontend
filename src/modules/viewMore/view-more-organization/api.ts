import { GetAllOrganizationQuery } from "./../../../apollo/types";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useAllOrganizations = () =>
  useQuery<GetAllOrganizationQuery>(gql`
    query getAllOrganization {
      organizations {
        id
        profilePictureUrl
        profilePictureHash
        abbreviation
        name
      }
    }
  `);
