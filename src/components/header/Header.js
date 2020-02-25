import React from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/button-open-modal/Button';
import './Header.css';

export default function Header({ handleOnOpenModal, title, caption }) {
  return (
    <header className="Header">
      <div className="Header-title">
        <h1>{title}</h1>
        <span>{caption}</span>
      </div>
      <Button
        onPress={handleOnOpenModal}
        title="Add"
        dataName="addUser"
        className="Header-button"
      />
    </header>
  );
}

Header.propTypes = {
  handleOnOpenModal: PropTypes.func,
  title: PropTypes.string,
  caption: PropTypes.string,
};
