import React from 'react';
import renderer from 'react-test-renderer';
import PokemonEvolutions from '..';

jest.mock('umi-plugin-react/locale');

describe('Components/PokemonEvolutions', () => {
  it('Get snapshot', () => {
    const component = renderer.create(<PokemonEvolutions evolutions={[]} />);
    let snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });
});
