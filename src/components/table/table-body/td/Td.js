import React from 'react';
import PropTypes from 'prop-types';
import './Td.css';

export function calcDaysFromRegistration(date) {
  const dayInMs = 24 * 60 * 60 * 1000;
  const now = new Date();
  const registered = new Date(date);
  return Math.round(Math.abs((now - registered) / dayInMs));
}

export default function Td({ isDate, value }) {
  if (isDate) {
    return (
      <td>
        <div className="TableBody-cell">{calcDaysFromRegistration(value)}d</div>
      </td>
    );
  } else if (typeof value === 'number') {
    return (
      <td>
        <div className="TableBody-cell">{value}</div>
      </td>
    );
  } else {
    return (
      <td>
        <div className="TableBody-cell">{value || '—'}</div>
      </td>
    );
  }
}

Td.propTypes = {
  isDate: PropTypes.bool,
  value: PropTypes.any,
};
