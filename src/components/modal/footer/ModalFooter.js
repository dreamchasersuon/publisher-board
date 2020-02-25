import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../spinner/Spinner';
import Button from '../../buttons/button-modal-action/Button';
import './ModalFooter.css';

export default function ModalFooter({
  btnCloseLabel,
  btnProceedLabel,
  handleOnCloseModal,
  handleOnSubmitForm,
  isLoading,
}) {
  return (
    <footer className="Modal-footer">
      {btnCloseLabel && (
        <Button onPress={handleOnCloseModal} label={btnCloseLabel} />
      )}
      {btnProceedLabel && (
        <Button
          testId="modal-perform"
          onPress={handleOnSubmitForm}
          label={isLoading ? <Spinner /> : btnProceedLabel}
        />
      )}
    </footer>
  );
}

ModalFooter.propTypes = {
  btnCloseLabel: PropTypes.string,
  btnProceedLabel: PropTypes.string,
  handleOnCloseModal: PropTypes.func,
  handleOnSubmitForm: PropTypes.func,
  isLoading: PropTypes.bool,
};
