import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import FormAddUser from './FormAddUser';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const onClose = jest.fn();
const setIsFetching = jest.fn();

describe('renders add user form, validate inputs', () => {
  let renderer;
  beforeEach(() => {
    const mockStore = configureStore();
    const store = mockStore({});

    renderer = render(
      <Provider store={store}>
        <FormAddUser
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

  test('validate username input to be less than 64 symbols', async () => {
    const name = 'name';
    const { getByTestId, findByTestId } = renderer;

    const input = getByTestId(name);
    fireEvent.change(input, {
      target: {
        value:
          'veryyyyyybiiiiignameveryyyyyybiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigname',
      },
    });
    fireEvent.blur(input);
    const validationError = await findByTestId('errors-name');

    expect(validationError.innerHTML).toBe('Max length is 64 symbols');
  });

  test('validate email input to be correct email', async () => {
    const name = 'email';
    const { getByTestId, findByTestId } = renderer;

    const input = getByTestId(name);
    fireEvent.change(input, {
      target: {
        value: 'awerk@..au',
      },
    });
    fireEvent.blur(input);
    const validationError = await findByTestId('errors-email');

    expect(validationError.innerHTML).toBe('Invalid email address');
  });

  test('validate custom name input to be less than 64 symbols', async () => {
    const name = 'custom';
    const { getByTestId, findByTestId } = renderer;

    const input = getByTestId(name);
    fireEvent.change(input, {
      target: {
        value:
          'veryyyyyybiiiiignameveryyyyyybiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigname',
      },
    });
    fireEvent.blur(input);
    const validationError = await findByTestId('errors-custom');

    expect(validationError.innerHTML).toBe('Max length is 64 symbols');
  });
});
