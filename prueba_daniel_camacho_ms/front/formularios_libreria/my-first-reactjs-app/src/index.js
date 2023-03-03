import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.css';
import './components/form/css/styleMenu.css';
import Main from './components/form/main/Main.js';


//ReactDOM.render(<p style={{color:'white'}}>Hello</p>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Main/>
  </React.StrictMode>
  //,document.getElementById('root')
);
reportWebVitals();
