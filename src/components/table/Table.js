import React from 'react';
import TableHead from './table-head/TableHead';
import TableBody from './table-body/TableBody';
import users from './users';
import './Table.css';

export default function Table() {
  return (
    <table>
      <TableHead />
      <TableBody users={users} />
    </table>
  );
}
