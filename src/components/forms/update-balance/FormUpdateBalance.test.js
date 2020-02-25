import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import FormUpdateBalance from './FormUpdateBalance';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const onClose = jest.fn();
const setIsFetching = jest.fn();

describe('renders update balance form, validate inputs', () => {
  let renderer;
  beforeEach(() => {
    const mockStore = configureStore();
    const store = mockStore({
      settings: { user: { user_id: 'alan', user_name: 'Peter' } },
    });

    renderer = render(
      <Provider store={store}>
        <FormUpdateBalance
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

  test('validate amount input to exist', async () => {
    const name = 'amount';
    const { getByTestId, findByTestId } = renderer;

    const input = getByTestId(name);
    fireEvent.blur(input);
    const validationError = await findByTestId(`errors-amount`);
    expect(validationError.innerHTML).toBe('Required field');
  });

  test('validate comment input to exist', async () => {
    const name = 'comment';
    const { getByTestId, findByTestId } = renderer;

    const input = getByTestId(name);
    fireEvent.blur(input);
    const validationError = await findByTestId(`errors-comment`);
    expect(validationError.innerHTML).toBe('Required field');
  });
});
