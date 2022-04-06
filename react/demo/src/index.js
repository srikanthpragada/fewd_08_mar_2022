import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './basics/Product'

ReactDOM.render(
  <React.StrictMode>
    <Product name="iPhone 13" price={80000} />
  </React.StrictMode>,
  document.getElementById('root')
);
 