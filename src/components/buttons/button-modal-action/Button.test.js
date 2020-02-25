import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

const handleOnPress = jest.fn();

test('renders modal action button with given label and action', () => {
  const tree = renderer
    .create(<Button label="close" onPress={handleOnPress} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
