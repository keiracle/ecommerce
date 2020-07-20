import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

library.add(fab, fas, far);

const theme = {
  color: {
    background: '#f4f4f4',
    primaryDark: '#0D0C1D',
    primaryLight: '#ffffff',
    primaryRed: 'rgb(220,9,78)',
    primaryOrange: 'rgb(255, 131, 0)',
  },

  responsive: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
