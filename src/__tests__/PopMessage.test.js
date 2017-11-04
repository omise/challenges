import React from 'react';
import renderer from 'react-test-renderer';
import PopMessage from '../components/PopMessage';

describe('PopMessage', function() {
  it('renders correctly', () => {
    const tree = renderer.create(
      <PopMessage/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
