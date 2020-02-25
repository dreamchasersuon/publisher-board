import React from 'react';
import snapshotDiff from 'snapshot-diff';
import Popover from './Popover';

const handleOpenModal = jest.fn();
const handleOnBlur = jest.fn();

test('renders popover or nothing if not visible', () => {
  expect(
    snapshotDiff(
      <Popover
        isVisible
        handleOpenModal={handleOpenModal}
        handleOnBlurPopover={handleOnBlur}
        popoverRef={null}
      />,
      <Popover
        isVisible={false}
        handleOpenModal={handleOpenModal}
        handleOnBlurPopover={handleOnBlur}
        popoverRef={null}
      />,
    ),
  ).toMatchSnapshot();
});
