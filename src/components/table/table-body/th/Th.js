import React from 'react';
import './Th.css';

function calcDaysFromRegistration(date) {
  const dayInMs = 24 * 60 * 60 * 1000;
  const now = new Date();
  const registered = new Date(date);
  return Math.round(Math.abs((now - registered) / dayInMs));
}

export default function Th({ isDate, value }) {
  if (isDate) {
    return (
      <th>
        <div className="TableBody-cell">{calcDaysFromRegistration(value)}d</div>
      </th>
    );
  } else {
    return (
      <th>
        <div className="TableBody-cell">{value || '—'}</div>
      </th>
    );
  }
}
