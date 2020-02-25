import React from 'react';
import { Provider } from 'react-redux';
import snapshotDiff from 'snapshot-diff';
import Transactions from './Transactions';
import configureStore from 'redux-mock-store';

const transactions = [
  {
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
  },
  {
    amount: 1200,
    comment: 'Update balance',
    date: '2017-02-10T15:02:29+03:00',
    operation_id: 828328435,
  },
];

test('renders transactions or not found if empty', () => {
  const mockStore = configureStore([]);

  expect(
    snapshotDiff(
      <Provider store={mockStore({ settings: { transactions } })}>
        <Transactions />
      </Provider>,
      <Provider store={mockStore({ settings: { transactions: [] } })}>
        <Transactions />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
