import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AlertComponent from './components/AlertComponent/AlertComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AlertComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
