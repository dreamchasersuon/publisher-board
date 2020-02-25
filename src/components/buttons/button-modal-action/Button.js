import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

export default function Button({ onPress, label, testId }) {
  return (
    <button
      data-testid={testId}
      onClick={onPress}
      type="button"
      className="Modal-action"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  testId: PropTypes.string,
};
