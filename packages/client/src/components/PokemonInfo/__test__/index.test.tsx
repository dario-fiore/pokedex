import React from 'react';
import renderer from 'react-test-renderer';
import PokemonInfo from '..';

jest.mock('umi-plugin-react/locale');

describe('Components/PokemonInfo', () => {
  it('Get snapshot', () => {
    const component = renderer.create(<PokemonInfo item={undefined} />);
    let snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });
});
