import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Books from './books/Books'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <Books />
  </React.StrictMode>,
);
