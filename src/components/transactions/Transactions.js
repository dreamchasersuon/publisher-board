import React from 'react';
import './Transactions.css';
import Transaction from './transaction/Transaction';
import { useSelector } from 'react-redux';

export default function Transactions() {
  const { transactions } = useSelector(state => state.settings);

  return (
    <div data-testid="modal-transactions" className="Transactions">
      {transactions
        ? transactions.map(transaction => {
            return (
              <Transaction
                key={transaction.operation_id}
                transaction={transaction}
              />
            );
          })
        : 'Transactions for this period is not found'}
    </div>
  );
}
