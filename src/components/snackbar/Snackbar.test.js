import React from 'react';
import snapshotDiff from 'snapshot-diff';
import Snackbar from './Snackbar';

const handleOnPress = jest.fn();

test('renders error or success snack alert', () => {
  expect(
    snapshotDiff(
      <Snackbar
        onClose={handleOnPress}
        message="Something went wrong"
        type="error"
      />,
      <Snackbar
        onClose={handleOnPress}
        message="Operation succeed"
        type="success"
      />,
    ),
  ).toMatchSnapshot();
});
