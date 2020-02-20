import React from 'react';
import Header from './components/header/Header';
import Table from './components/table/Table';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <button className="App-button">LOAD MORE</button>
    </div>
  );
}
