import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SWRConfig } from 'swr';
import store, { persistor } from './redux/store';
import fetcher from './libs/fetcher';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

export default function Root() {
  return (
    <Provider store={store} loading={<div>loading...</div>}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </SWRConfig>
      </PersistGate>
    </Provider>
  );
}
