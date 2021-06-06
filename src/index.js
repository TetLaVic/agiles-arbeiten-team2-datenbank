import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
