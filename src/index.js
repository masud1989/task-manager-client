import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap.css';
import './assets/css/animate.min.css';
import './assets/css/style.css';


import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </BrowserRouter>
);


