import React from 'react';
import PropTypes from 'prop-types';
import './ModaHeader.css';

export default function ModalHeader({ title }) {
  return (
    <header className="Modal-header">
      <h2>{title}</h2>
    </header>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string,
};
