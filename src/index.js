import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { setAuthHeader } from './redux/transaction/transactionOperations';
import App from './components/App/App';
import './index.css';

const state = store.getState();

const persistedToken = state.auth?.token;
if (persistedToken) {
  setAuthHeader(persistedToken); // Configureaza header-ul de autentificare
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>
);
