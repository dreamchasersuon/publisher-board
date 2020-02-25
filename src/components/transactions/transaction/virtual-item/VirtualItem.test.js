import React from 'react';
import renderer from 'react-test-renderer';
import VirtualItem from './VirtualItem';

test('renders purchased virtual item', () => {
  const item = {
    amount: 10,
    virtual_item: {
      sku: 22,
      localized_name: 'Snow Drum Machine',
    },
  };
  const tree = renderer.create(<VirtualItem item={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});
