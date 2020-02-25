import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

test('renders header with title and caption', () => {
  const tree = renderer
    .create(<Header title="Players" caption="manage users of your game" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
