import React from 'react';
import ReactDOM from 'react-dom/client';
import './23-quiz/setup/index.css';
import App from './23-quiz/setup/App';
import { AppProvider } from './23-quiz/setup/context';
// import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      {/* <Router> */}
      <App />
      {/* </Router> */}
    </AppProvider>
  </React.StrictMode>
);
