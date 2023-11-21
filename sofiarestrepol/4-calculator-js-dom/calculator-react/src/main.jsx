
import React from 'react'; //React trabaja los componentes, las herramientas de desarrollo
import ReactDOM from 'react-dom/client'; //ReactDOM sincroniza las copias remotas - locales (?)
import App from './App.jsx'; //importa App desde el doc .App.jsx
import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App title="Calculator" time={5000}/>
  </React.StrictMode>
); //esta es la linea que representa react

//strict mode evita el uso del var, y usa const 