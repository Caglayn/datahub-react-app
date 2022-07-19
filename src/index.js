import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { defaultAlertOptions } from './util/StyleProps';

const store = ConfigureStore();

const alertOptions = defaultAlertOptions;

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
