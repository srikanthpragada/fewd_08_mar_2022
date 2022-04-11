import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import GithubUserInfo from './ajax/GithubUserInfo'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <GithubUserInfo />
  </React.StrictMode>,
);
