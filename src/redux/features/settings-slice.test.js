import configureStore from 'redux-mock-store';
import settings, {
  setIsRefresh,
  setTransactions,
  setActiveUser,
} from './settingsFeatureSlice';

describe('redux handling settings actions to set isRefresh', () => {
  test('action set refresh to true', () => {
    const mockStore = configureStore();
    const store = mockStore({});
    store.dispatch(
      setIsRefresh({
        refresh: true,
      }),
    );
    expect(store.getActions()).toMatchSnapshot();
  });

  test('reducer should handle setIsRefresh action', () => {
    expect(
      settings(
        { user: null, isRefresh: false, transactions: [] },
        {
          type: 'settings/setIsRefresh',
          payload: {
            refresh: true,
          },
        },
      ),
    ).toMatchSnapshot();
  });
});

describe('redux handling settings actions to set active user', () => {
  test('action set active user', () => {
    const mockStore = configureStore();
    const store = mockStore({});
    store.dispatch(
      setActiveUser({
        user: {
          user_name: 'Don',
          user_id: 'Huan',
        },
      }),
    );
    expect(store.getActions()).toMatchSnapshot();
  });

  test('reducer should handle setActiveUser action', () => {
    expect(
      settings(
        { user: null, isRefresh: false, transactions: [] },
        {
          type: 'settings/setActiveUser',
          payload: {
            user: {
              user_name: 'Don',
              user_id: 'Huan',
            },
          },
        },
      ),
    ).toMatchSnapshot();
  });
});

describe('redux handling settings actions to set transactions', () => {
  test('action set transactions', () => {
    const mockStore = configureStore();
    const store = mockStore({});
    store.dispatch(
      setTransactions({
        transactions: [
          { id: 1, amount: 3000 },
          { id: 2, amount: 3000 },
        ],
      }),
    );
    expect(store.getActions()).toMatchSnapshot();
  });

  test('reducer should handle setTransactions action', () => {
    expect(
      settings(
        { user: null, isRefresh: false, transactions: [] },
        {
          type: 'settings/setTransactions',
          payload: {
            transactions: [
              { id: 1, amount: 3000 },
              { id: 2, amount: 3000 },
            ],
          },
        },
      ),
    ).toMatchSnapshot();
  });
});
