import React from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import App from './components/App/App';

createRoot(document.getElementById("app") as HTMLElement).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);