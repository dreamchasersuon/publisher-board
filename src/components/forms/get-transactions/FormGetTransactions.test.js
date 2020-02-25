import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import FormGetTransactions from './FormGetTransactions';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const onClose = jest.fn();
const setIsFetching = jest.fn();

describe('renders get transactions form, validate inputs', () => {
  let renderer;
  beforeEach(() => {
    const mockStore = configureStore();
    const store = mockStore({ settings: { user: { user_id: 'alan' } } });

    renderer = render(
      <Provider store={store}>
        <FormGetTransactions
          onClose={onClose}
          formRef={null}
          setIsFetching={setIsFetching}
        />
      </Provider>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('validate date from input to exist', async () => {
    const name = 'dateFrom';
    const { getByTestId, findByTestId } = renderer;

    const input = getByTestId(name);
    fireEvent.blur(input);
    const validationError = await findByTestId(`errors-dateFrom`);

    expect(validationError.innerHTML).toBe('Expected format is YYYY-MM-DD');
  });

  test('validate date to input to exist', async () => {
    const name = 'dateTo';
    const { getByTestId, findByTestId } = renderer;

    const input = getByTestId(name);
    fireEvent.blur(input);
    const validationError = await findByTestId(`errors-dateTo`);

    expect(validationError.innerHTML).toBe('Expected format is YYYY-MM-DD');
  });
});
