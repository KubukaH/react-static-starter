import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./styles.less";

import App from './app';

ReactDOM.render((
  <React.StrictMode>
    <BrowserRouter initialEntries={["/"]} initialIndex={0}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
), document.getElementById('root'));
