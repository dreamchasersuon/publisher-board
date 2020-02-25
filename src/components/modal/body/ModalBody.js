import React from 'react';
import PropTypes from 'prop-types';
import './ModalBody.css';

export default function ModalBody({ children }) {
  return <main className="Modal-body">{children}</main>;
}

ModalBody.propTypes = {
  btnCloseLabel: PropTypes.element,
};
