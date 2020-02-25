import React from 'react';
import './Snackbar.css';

export default function Snackbar({ type, message, onClose }) {
  const classType = type === 'error' ? 'error' : 'success';
  return (
    <div className="Snackbar">
      <span className={'Snackbar-title ' + classType}>{message}</span>
      <div onClick={onClose} className="Snackbar-close">
        X
      </div>
    </div>
  );
}
