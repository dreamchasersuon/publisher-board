import React from 'react';
import renderer from 'react-test-renderer';
import ModalHeader from './ModalHeader';

test('renders modal header with given title', () => {
  const tree = renderer.create(<ModalHeader title="Update User" />).toJSON();
  expect(tree).toMatchSnapshot();
});
