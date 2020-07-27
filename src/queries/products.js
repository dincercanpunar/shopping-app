import { gql } from '@apollo/client';

const PRODUCTS = gql`
  query {
    products {
      title
      price
    }
  }
`;

export {
    PRODUCTS
}
