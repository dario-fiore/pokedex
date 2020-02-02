import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query Pokemons($filter: FilterInput, $after: ID, $limit: Int) {
    pokemons(q: $filter, after: $after, limit: $limit) {
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
