import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.hydrate(
  <App {...window.APP_STATE} />,
  document.getElementById('app')
);
