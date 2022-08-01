import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Istoric from './componente/Istoric';


import Plansa from './componente/Plansa';
import Restart from './componente/Restart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Plansa>
    </Plansa>

    <Restart/>
    <Istoric/>
  </React.StrictMode>
);


