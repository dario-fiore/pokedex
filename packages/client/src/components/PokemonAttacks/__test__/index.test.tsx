import React from 'react';
import renderer from 'react-test-renderer';
import PokemonAttacks from '..';

jest.mock('umi-plugin-react/locale');

describe('Components/PokemonAttacks', () => {
  it('Get snapshot', () => {
    const attacks: IAttacks = {
      fast: [],
      special: [],
    };
    const component = renderer.create(<PokemonAttacks attacks={attacks} />);
    let snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });
});
