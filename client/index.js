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
import store from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddFoodItem from './pages/AddFoodItem.jsx';
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const root = createRoot(document.getElementById('contents'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/addItem',
    element: <AddFoodItem/>,
    errorElement: <ErrorPage/>,
  }
])
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
