import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root');
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
