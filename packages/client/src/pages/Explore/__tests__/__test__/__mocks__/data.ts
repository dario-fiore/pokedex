export const _mockedResult = {
  data: {
    pokemons: {
      edges: [
        {
          cursor: '025',
          node: {
            id: '025',
            name: 'Pikachu',
            types: ['Electric'],
            classification: 'Mouse Pokémon',
            weight: {
              maximum: '6.75kg',
              minimum: '5.25kg',
            },
            height: {
              maximum: '0.45m',
              minimum: '0.35m',
            },
            evolutions: [
              {
                id: 26,
                name: 'Raichu',
              },
            ],
            attacks: {
              fast: [
                {
                  name: 'Quick Attack',
                  type: 'Normal',
                  damage: 10,
                },
                {
                  name: 'Thunder Shock',
                  type: 'Electric',
                  damage: 5,
                },
              ],
              special: [
                {
                  name: 'Discharge',
                  type: 'Electric',
                  damage: 35,
                },
                {
                  name: 'Thunder',
                  type: 'Electric',
                  damage: 100,
                },
                {
                  name: 'Thunderbolt',
                  type: 'Electric',
                  damage: 55,
                },
              ],
            },
          },
        },
      ],
      pageInfo: {
        endCursor: '025',
        hasNextPage: false,
      },
    },
  },
};
