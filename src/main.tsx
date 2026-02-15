import React from 'react';
import App from './App';
import './index.css';

const root = document.getElementById('root');
if (root) {
  const { createRoot } = require('react-dom/client');
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
