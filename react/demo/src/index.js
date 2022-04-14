import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
// import Books from './books/Books'
import ContextDemo  from './pc/ContextDemo'
import PropsDemo from './pc/PropsDemo';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <ContextDemo />
     <PropsDemo />
  </React.StrictMode>,
);
