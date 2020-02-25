import React from 'react';
import snapshotDiff from 'snapshot-diff';
import Transaction from './Transaction';

const transactionWithItems = {
  amount: 12,
  comment: null,
  date: '2018-12-28T15:02:29+03:00',
  operation_id: 178199125,
  virtual_items: [
    {
      amount: 1,
      virtual_item: {
        localized_name: 'Item2',
        sku: '002',
      },
    },
    {
      amount: 123,
      virtual_item: {
        localized_name: 'Item3',
        sku: '003',
      },
    },
  ],
};

const transactionWithComment = {
  amount: 1200,
  comment: 'Update balance',
  date: '2017-02-10T15:02:29+03:00',
  operation_id: 828328435,
};

test('renders purchase transaction or update balance', () => {
  expect(
    snapshotDiff(
      <Transaction transaction={transactionWithItems} />,
      <Transaction transaction={transactionWithComment} />,
    ),
  ).toMatchSnapshot();
});
