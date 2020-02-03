import React from 'react';
import renderer from 'react-test-renderer';
import Panel from '..';

jest.mock('umi-plugin-react/locale');

describe('Components/Panel', () => {
  it('Render panel with a title', () => {
    const component = renderer.create(<Panel title={'title'} content={<span>content</span>} />);
    let snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('Render panel wihtout title', () => {
    const component = renderer.create(<Panel content={<span>content</span>} />);
    let snap = component.toJSON();
    expect(snap).toMatchSnapshot();
  });
});
