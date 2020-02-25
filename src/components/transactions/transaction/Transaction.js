import React from 'react';
import PropTypes from 'prop-types';
import VirtualItem from './virtual-item/VirtualItem';
import './Transaction.css';

const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

export default function Transaction({ transaction }) {
  function formatDate(dateUTC) {
    const date = new Date(dateUTC);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
  return (
    <div className="Transaction">
      <span className="Transaction-date">{formatDate(transaction.date)}</span>
      {transaction.virtual_items &&
        transaction.virtual_items.map(item => {
          return <VirtualItem key={item.virtual_item.sku} item={item} />;
        })}
      <div className="Transaction-comment_and_amount">
        {<span className="Transaction-comment">{transaction.comment}</span>}
        <span className="Transaction-total">
          {'Total: '}
          {transaction.virtual_items
            ? transaction.virtual_items.reduce(
                (sum, item) => sum + (item.amount || 0),
                0,
              )
            : transaction.amount}
        </span>
      </div>
    </div>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.object,
};
