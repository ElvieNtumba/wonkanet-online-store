import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { UserProvider } from './pages/uesrContext';



ReactDOM.render(
    <UserProvider>
      <App />
    </UserProvider>,
    document.getElementById('root')
  );