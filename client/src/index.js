import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router';
import App from './js/components/App';
import './styles/index.min.css';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
