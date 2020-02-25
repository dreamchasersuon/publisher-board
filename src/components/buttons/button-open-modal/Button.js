import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({
  title,
  onPress,
  dataName,
  className,
  testId,
}) {
  return (
    <button
      data-testid={testId}
      data-name={dataName}
      onMouseDown={onPress}
      className={className}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  dataName: PropTypes.string,
  className: PropTypes.string,
  testId: PropTypes.string,
};
