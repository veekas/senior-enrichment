'use strict';
import React from 'react';
import { render } from 'react-dom'; // might need to import ReachCOM as a whole
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Root from './components/Root';

import store from './store';

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Root />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main')
);
