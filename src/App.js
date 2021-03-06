import React, { } from 'react';
import Top from './components/permanent/Top/Top';
import Inicio from './components/pages/inicio/Inicio';
import Fichaje from './components/pages/fichaje/Fichaje';
import MisionVision from './components/pages/mision-vision/MisionVision';
import Footer from './components/permanent/footer/Footer';
import Historia from './components/pages/historia/Historia';
import Transporte from './components/pages/transporte/Transporte';
import Ubicacion from './components/pages/ubicacion/Ubicacion';
import Acuerdo286 from './components/pages/acuerdo286/Acuerdo286';
import admision from  './components/pages/admision/Admision';
import admisionInfo from  './components/pages/admision-info/Admision';
import admisionResult from  './components/pages/admision-result/Admision';

import AuxEdu from './components/pages/capacitaciones/auxedu/AuxEdu';
import Info from   './components/pages/capacitaciones/info/Info';
import salud from   './components/pages/capacitaciones/salud/Salud';
import conta from   './components/pages/capacitaciones/conta/Conta';
import diseno from   './components/pages/capacitaciones/diseno/Diseno';

import Boleta from './components/userTem/boleta/boleta';

import EnProc from './components/pages/enProceso/EnProceso';

import './App-p.css';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import{ BrowserRouter as Router,Switch,Route } from 'react-router-dom';



function App() {

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
              <Route path="/acuerdo286"  component={Acuerdo286}   />
              <Route path="/auxEdu"  component={AuxEdu}   />
              <Route path="/enProgreso"  component={EnProc} />
              <Route path="/info"  component={Info} />
              <Route path="/salud"  component={salud}/>
              <Route path="/conta"  component={conta}/>
              <Route path="/diseno"  component={diseno}/>
              <Route path="/admision"  component={admision}/>
              <Route path="/admision-info"  component={admisionInfo}/>
              <Route path="/admision-result"  component={admisionResult}/>
              <Route path="/boleta"  component={Boleta}/>
            </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;

