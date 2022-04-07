import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Todos from './basics/Todos'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>,
);
