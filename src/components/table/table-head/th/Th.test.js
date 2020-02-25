import React from 'react';
import renderer from 'react-test-renderer';
import Th from './Th';

test('renders table head cell with name', () => {
  const testRenderer = renderer.create(<Th name="state" />);
  const testInstance = testRenderer.root;
  expect(
    testInstance.findByProps({ className: 'TableHead-cell' }).children,
  ).toEqual(['state']);
});
