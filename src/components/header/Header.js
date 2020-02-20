import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-title">
        <h1>Players</h1>
        <span>manage users of your game</span>
      </div>
      <button className="Header-button">Add</button>
    </header>
  );
}
