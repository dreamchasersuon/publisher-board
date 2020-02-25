import React from 'react';
import snapshotDiff from 'snapshot-diff';
import Modal from './Modal';

const handleOnPress = jest.fn();

jest.mock('../forms/add-user/FormAddUser', () => 'FormAddUser');

test('renders modal with form selected by name or nothing to show message', () => {
  expect(
    snapshotDiff(
      <Modal onClose={handleOnPress} name="addUser" />,
      <Modal onClose={handleOnPress} />,
    ),
  ).toMatchSnapshot();
});
