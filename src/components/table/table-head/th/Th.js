import React from 'react';
import './Th.css';

export default function Th({ name }) {
  return (
    <th>
      <div className="TableHead-cell">{name && name.toUpperCase()}</div>
    </th>
  );
}
