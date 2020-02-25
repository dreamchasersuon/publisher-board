import React from 'react';
import snapshotDiff from 'snapshot-diff';
import TableFooter from './TableFooter';

const loadMore = jest.fn();

test('renders table footer with spinner or disabled', () => {
  expect(
    snapshotDiff(
      <TableFooter isLoadingMore loadMore={loadMore} />,
      <TableFooter loadMore={loadMore} isReachingEnd />,
    ),
  ).toMatchSnapshot();
});
