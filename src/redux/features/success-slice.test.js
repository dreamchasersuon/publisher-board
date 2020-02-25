import configureStore from 'redux-mock-store';
import success, { setSuccessMessage } from './successFeatureSlice';

describe('redux set and remove success messages', () => {
  test('action with success message', () => {
    const mockStore = configureStore();
    const store = mockStore({});
    store.dispatch(
      setSuccessMessage({
        message: 'User vasyan_13 updated',
      }),
    );
    expect(store.getActions()).toMatchSnapshot();
  });

  test('reducer should handle setSuccessMessage action', () => {
    expect(
      success([], {
        type: 'success/setSuccessMessage',
        payload: {
          message: 'User vasyan_13 updated',
        },
      }),
    ).toMatchSnapshot();
  });

  test('reducer should handle removeSuccessMessage action', () => {
    expect(
      success(['User vasyan_13 updated'], {
        type: 'success/removeSuccessMessage',
      }),
    ).toMatchSnapshot();
  });
});
