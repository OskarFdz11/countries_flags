import { gql } from "@apollo/client";

export const COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      continent {
        name
      }
      states {
        name
      }
      subdivisions {
        name
        emoji
      }
      currency
      emoji
      emojiU
      languages {
        name
      }
      native
      phone
    }
  }
`;
