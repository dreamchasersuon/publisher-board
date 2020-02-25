import configureStore from 'redux-mock-store';
import errors, { setError } from './errorsFeatureSlice';

describe('redux set and remove errors', () => {
  test('action with error', () => {
    const mockStore = configureStore();
    const store = mockStore({});
    store.dispatch(
      setError({
        e: { http_status_code: '422', message: 'Invalid request data' },
      }),
    );
    expect(store.getActions()).toMatchSnapshot();
  });

  test('reducer should handle setError action', () => {
    expect(
      errors([], {
        type: 'errors/setError',
        payload: {
          e: { http_status_code: '400', message: 'Network error' },
        },
      }),
    ).toMatchSnapshot();
  });

  test('reducer should handle removeError action', () => {
    expect(
      errors([{ http_status_code: '400', message: 'Network error' }], {
        type: 'errors/removeError',
      }),
    ).toMatchSnapshot();
  });
});
