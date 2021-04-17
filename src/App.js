import React, { } from 'react';
import Top from './components/permanent/Top/Top';
import Inicio from './components/pages/inicio/Inicio';
import Fichaje from './components/pages/fichaje/Fichaje';
import MisionVision from './components/pages/mision-vision/MisionVision';
import Footer from './components/permanent/footer/Footer';
import Historia from './components/pages/historia/Historia';
import Transporte from './components/pages/transporte/Transporte';
import Ubicacion from './components/pages/ubicacion/Ubicacion';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import{ BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import axios from "axios";


function App() {

  axios.get('/apiPrueba').then(
    (data) =>{console.log(data)}

  ).catch(function(error) {
    console.log(error)
})


  fetch('/apiPrueba')
  .then(response => response)
  .then(data => console.log(data)).catch(function(err) {
    console.error(err);
});

  return (
    <div className="App">
      <Router> 
        <div className="App">
          <Top/>
            <Switch>
              <Route path="/" exact component={Inicio} />
              <Route path="/mision-vision"  component={MisionVision} />
              <Route path="/fichaje"  component={Fichaje} />
              <Route path="/historia"  component={Historia}   />
              <Route path="/transporte"  component={Transporte}   />
              <Route path="/ubicacion"  component={Ubicacion}   />
            </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
