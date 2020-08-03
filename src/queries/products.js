import { gql } from '@apollo/client';

const PRODUCTS = gql`
  query {
    products {
      id
      title
      price
    }
  }
`;

export {
    PRODUCTS
}
