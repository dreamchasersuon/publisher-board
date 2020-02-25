import React from 'react';
import PropTypes from 'prop-types';
import './Th.css';

export default function Th({ name }) {
  return (
    <th>
      <div className="TableHead-cell">{name}</div>
    </th>
  );
}

Th.propTypes = {
  name: PropTypes.string,
};
