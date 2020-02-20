import React from 'react';
import Th from './th/Th';
import './TableHead.css';

export default function TableHead() {
  return (
    <thead className="TableHead">
      <tr>
        <Th name="state" />
        <Th name="name" />
        <Th name="custom" />
        <Th name="email" />
        <Th name="balance" />
        <Th name="created" />
        <Th />
      </tr>
    </thead>
  );
}
