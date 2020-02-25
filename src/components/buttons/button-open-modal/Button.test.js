import React from 'react';
import snapshotDiff from 'snapshot-diff';
import Button from './Button';

const handleOnPress = jest.fn();

test('renders modal buttons with different states', () => {
  expect(
    snapshotDiff(
      <Button
        onPress={handleOnPress}
        title="Add"
        className="Header-button"
        dataName="addUser"
      />,
      <Button
        onPress={handleOnPress}
        title="Update User"
        className="Popover-button"
        dataName="updateUser"
      />,
    ),
  ).toMatchSnapshot();
});
