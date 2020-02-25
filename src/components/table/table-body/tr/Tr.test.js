import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tr from './Tr';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const onOpen = jest.fn();
const user = {
  user_id: 1,
  enabled: true,
  user_name: 'John',
  user_custom: 'Malkovich',
  email: 'saint@malkovich.com',
  balance: '9999999',
  register_date: '2019-01-30T10:24:53+00:00',
};
const users = [
  user,
  {
    user_id: 2,
    enabled: true,
    user_name: 'Charles',
    user_custom: 'Bukovski',
    email: 'buk@charles.com',
    balance: '-999.99',
    register_date: '2019-01-31T10:24:53+00:00',
  },
];

describe('renders table body row', () => {
  test('open popover', async () => {
    const mockStore = configureStore();
    const store = mockStore({});
    const { getByTestId, findByTestId } = render(
      <Provider store={store}>
        <table>
          <tbody>
            <Tr user={user} users={users} handleOnOpenModal={onOpen} />
          </tbody>
        </table>
      </Provider>,
    );

    const btn = getByTestId('popover-button');
    fireEvent.click(btn);

    const popover = await findByTestId('popover');

    expect(popover).toMatchSnapshot();
    expect(store.getActions()).toMatchSnapshot();
  });
});
