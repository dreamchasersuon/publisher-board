import React from 'react';
import PropTypes from 'prop-types';
import './VirtualItem.css';

export default function VirtualItem({ item }) {
  return (
    <div className="Transaction-item">
      <span className="TransactionItem-name">
        {item.virtual_item.localized_name}
      </span>
      <span className="TransactionItem-amount">{item.amount}</span>
    </div>
  );
}

VirtualItem.propTypes = {
  item: PropTypes.object,
};
