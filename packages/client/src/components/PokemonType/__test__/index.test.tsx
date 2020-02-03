import React from 'react';
import renderer from 'react-test-renderer';
import PokemonType from '..';

describe('Components/PokemonType', () => {
  it('Get snapshot', () => {
    const component = renderer.create(<PokemonType icon={'Bug'} />);
    let snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });
});
