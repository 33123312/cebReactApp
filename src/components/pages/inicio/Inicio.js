import React, { } from 'react';
import NoticeBoard from "./components/NoticeBoard/NoticeBoard";
import Presentacion from './components/Presentacion/Presentacion';

import './Inicio.css';
import "bootstrap/dist/css/bootstrap.min.css"

function Inicio() {
  return (
    <div className="App">
      <NoticeBoard/>
      <Presentacion/>
      
    </div>
  );
}

export default Inicio;