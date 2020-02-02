interface IResponse<T> {
  data: T;
}

interface IPageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

interface IPokemons {
  pokemons: {
    edges: Array<IEdge>;
    pageInfo: IPageInfo;
  };
}

interface IWeightHeight {
  minimum: string;
  maximum: string;
}

interface IEvolution {
  id: number;
  name: string;
}

interface IAttack {
  name: string;
  type: PokemonType;
  damage: number;
}

interface IAttacks {
  fast: IAttack[];
  special: IAttack[];
}

interface IEdge {
  cursor: number;
  node: {
    id: number;
    name: string;
    types: PokemonType[];
    classification: PokemonClassification;
    weight: IWeightHeight;
    height: IWeightHeight;
    evolutions: IEvolution[];
    attacks: IAttacks;
  };
}

/**
 * Classification of pokemons
 */
type PokemonClassification =
  | 'Seed Pokémon'
  | 'Lizard Pokémon'
  | 'Flame Pokémon'
  | 'Tiny Turtle Pokémon'
  | 'Shellfish Pokémon'
  | 'Worm Pokémon'
  | 'Cocoon Pokémon'
  | 'Butterfly Pokémon';

/**
 * Types of pokemon
 */
type PokemonType =
  | 'Grass'
  | 'Poison'
  | 'Fire'
  | 'Water'
  | 'Flying'
  | 'Bug'
  | 'Normal'
  | 'Dragon'
  | 'Electric'
  | 'Rock'
  | 'Ground'
  | 'Fairy'
  | 'Fighting'
  | 'Psychic'
  | 'Ice'
  | 'Dark'
  | 'Steel';
