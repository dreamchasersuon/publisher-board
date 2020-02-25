import React from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/button-open-modal/Button';
import './Popover.css';

export default function Popover({
  handleOnBlurPopover,
  popoverRef,
  handleOpenModal,
}) {
  return (
    <div
      data-testid="popover"
      tabIndex="0"
      ref={popoverRef}
      onBlur={handleOnBlurPopover}
      className="Popover"
    >
      <Button
        testId="update-user"
        title="Update User"
        dataName="updateUser"
        onPress={handleOpenModal}
        className="Popover-button"
      />
      <Button
        testId="get-transactions"
        title="Get Transactions"
        dataName="getTransactions"
        onPress={handleOpenModal}
        className="Popover-button"
      />
      <Button
        testId="update-balance"
        title="Update Balance"
        dataName="updateBalance"
        onPress={handleOpenModal}
        className="Popover-button"
      />
    </div>
  );
}

Popover.propTypes = {
  handleOnBlurPopover: PropTypes.func,
  handleOpenModal: PropTypes.func,
  popoverRef: PropTypes.object,
};
