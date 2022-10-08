import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <AuthProvider authType="localstorage" authName="_mementor">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
