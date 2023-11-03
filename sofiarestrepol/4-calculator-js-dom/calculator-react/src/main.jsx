
import React from 'react'; //importa react desde node_modules
import ReactDOM from 'react-dom/client'; //importa el document potenciado por react
import App from './App.jsx'; //importa App desde el doc .App.jsx
import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App title="Calculator" time={5000}/>
  </React.StrictMode>
); //esta es la linea que representa react

//strict mode evita el uso del var, y usa const 