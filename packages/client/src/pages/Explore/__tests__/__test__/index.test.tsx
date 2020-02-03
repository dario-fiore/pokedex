import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import { act, create } from 'react-test-renderer';
import Explore from '../..';
import { GET_POKEMONS } from '../../graphql/queries';
import { _mockedResult } from './__mocks__/data';

jest.mock('umi-plugin-react/locale');

const mocks = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        filter: {
          name: 'Pik',
        },
      },
    },
    result: _mockedResult,
  },
];

describe('pages/explore', async () => {
  it('should render without error', async () => {
    let component;
    act(() => {
      component = create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Explore />
        </MockedProvider>,
      );
    });
    expect(component).toMatchSnapshot();
  });
});
