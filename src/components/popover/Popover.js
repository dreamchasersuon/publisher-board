import React from 'react';
import './Popover.css';

export default function Popover({ isVisible }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="Popover">
      <button className="Popover-button">Update User</button>
      <button className="Popover-button">Update Balance</button>
      <button className="Popover-button">Get Transactions</button>
    </div>
  );
}
