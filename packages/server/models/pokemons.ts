import { pipe } from "fp-ts/lib/pipeable";
import * as O from "fp-ts/lib/Option";
import * as A from "fp-ts/lib/Array";
import { identity } from "fp-ts/lib/function";
import { data } from "../data/pokemons";
import { toConnection, slice } from "../functions";
import { Connection } from "../types";

interface Pokemon {
  id: string;
  name: string;
  types: string[];
  classification: string;
}

const SIZE = 10;

interface FilterInput {
  name: string;
  type: string;
  classification: string;
}

/**
 * Fin all pokemons using filter and pagination, all filter will be applied with "and" operator
 *
 * @param after
 * @param limit
 * @param q
 */
export function find(args: {
  after?: string;
  limit?: number;
  q?: FilterInput;
}): Connection<Pokemon> {
  const { after, q, limit = SIZE } = args;

  /**
   * Filter by name
   */
  const filterByNames: (as: Pokemon[]) => Pokemon[] =
    q?.name === undefined
      ? identity
      : A.filter(p => p.name.toLowerCase().includes(q.name.toLowerCase()));

  /**
   * Filter by type
   */
  const filterByType: (as: Pokemon[]) => Pokemon[] =
    q?.type === undefined ? identity : A.filter(p => p.types.includes(q.type));

  /**
   * Filter by classification
   */
  const filterByClassification: (as: Pokemon[]) => Pokemon[] =
    q?.classification === undefined
      ? identity
      : A.filter(p => p.classification.includes(q.classification));

  /**
   * Manage pagination
   */
  const sliceByAfter: (as: Pokemon[]) => Pokemon[] =
    after === undefined
      ? identity
      : as =>
          pipe(
            as,
            A.findIndex(a => a.id === after),
            O.map(a => a + 1),
            O.fold(
              () => as,
              idx => as.slice(idx)
            )
          );

  const results: Pokemon[] = pipe(
    data,
    filterByNames,
    filterByType,
    filterByClassification,
    sliceByAfter,
    // slicing limit + 1 because the `toConnection` function should known the connection size to determine if there are more results
    slice(0, limit + 1)
  );

  return toConnection(results, limit);
}
