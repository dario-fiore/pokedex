import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query {
    pokemons {
      edges {
        cursor
        node {
          id
          name
          types
          classification
          weight {
            maximum
            minimum
          }
          height {
            maximum
            minimum
          }
          evolutions {
            id
            name
          }
          attacks {
            fast {
              name
              type
              damage
            }
            special {
              name
              type
              damage
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
