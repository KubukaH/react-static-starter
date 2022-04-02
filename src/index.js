import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./styles.less";
import App from './app';

import { accountService } from './_services';

// attempt silent token refresh before startup
accountService.refreshToken().finally(startApp);

function startApp () {
  ReactDOM.render((
    <React.StrictMode>
      <BrowserRouter initialEntries={["/"]} initialIndex={0}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  ), document.getElementById('root'));
}
