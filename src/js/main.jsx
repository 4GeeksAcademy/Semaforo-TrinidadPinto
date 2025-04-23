import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '../styles/index.css';

import Semaforo from './components/Home';

console.log("Si funciona");
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Semaforo />);
