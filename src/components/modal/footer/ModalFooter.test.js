import React from 'react';
import snapshotDiff from 'snapshot-diff';
import ModalFooter from './ModalFooter';

test('renders modal footer with different buttons', () => {
  expect(
    snapshotDiff(
      <ModalFooter btnCloseLabel="close" />,
      <ModalFooter btnCloseLabel="close" btnProceedLabel="update" />,
    ),
  ).toMatchSnapshot();
});
