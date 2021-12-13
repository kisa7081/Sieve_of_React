import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  // Not using <React.StrictMode>, it messes up the event handling.
    <App />
,
  document.getElementById('root')
);

