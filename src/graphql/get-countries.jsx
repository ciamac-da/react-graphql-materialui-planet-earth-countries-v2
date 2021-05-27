import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      name
      code
      emoji
      phone
      capital
      languages {
        name
        code
      }
    }
  }
`;
