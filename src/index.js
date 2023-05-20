/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable comma-dangle */
// eslint-disable-next-line linebreak-style
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDom.render(
  <BrowserRouter>

    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
