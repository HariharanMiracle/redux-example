import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/reducers'

import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(todoApp)

ReactDOM.render(
  // <React.StrictMode>
    // <App1 />
  // </React.StrictMode>,

  <Provider store = {store}>
    <App1 />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
