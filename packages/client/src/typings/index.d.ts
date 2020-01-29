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
| 'Psychic';


export interface IPokemon {
  id: string;
  name: string;
  classification: PokemonClassification;
  types: Set<PokemonType>;
  resistant: Set<PokemonType>;
  weaknesses: Set<PokemonType>;
  weight: IWeight;
  height: IHeight;
  fleeRate: number;
  evolutionRequirements: IEvolutionRequirements;
  evolutions: IEvolution[];
  maxCP: number;
  maxHP: number;
  attacks: IAttacks;
}

interface IWeight {
  minimum: string;
  maximum: string;
}

interface IHeight {
  minimum: string;
  maximum: string;
}

interface IEvolutionRequirements {
  amount: number;
  name: string;
}

interface IEvolution {
  id: number;
  name: string;
}

interface IFast {
  name: string;
  type: string;
  damage: number;
}

interface ISpecial {
  name: string;
  type: string;
  damage: number;
}

interface IAttacks {
  fast: IFast[];
  special: ISpecial[];
}
