/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App.jsx';
import store from './app/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('contents'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
