import React from 'react';
import renderer from 'react-test-renderer';
import Filters from '..';

jest.mock('umi-plugin-react/locale');

describe('Components/Filters', () => {
  it('Get snapshot of filters', () => {
    const component = renderer.create(
      <Filters classifications={[]} types={[]} onSearch={() => true} />,
    );
    let snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });
});
