import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import logoUnpaz from './img/logoUnpaz.jpg'
//componentes

import Principal from './componentes/Principal';
import AgregaTuto from './componentes/agregaTuto';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";



//tutorial.publicado ? 'Publicado' : 'Pendiente' condición ? true : false

class App extends Component {

 
  

  render(){

        return(
           
          <Router>
          <div class="nav-wrapper">

            
            <nav class="blue">
     
              <ul>

              <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/Principal">API TUTORIALES</Link>
                </li>

                <li>
                  <Link to="/agregaTuto">Agrega Tutoriales</Link>
                </li>

              </ul>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              
              
            <Route path="/" exact>
          <h1 class="tituloTable center-align">BIENVENIDOS A API TUTORIALES</h1>
            
            
            <div className="container">
            <div class="card">
           
            <div class="card-content">
            <h1 className="center-align">Trabajo de Practica Integradora 2020</h1>
           </div>
          <div class="card-tabs">
         <ul class="tabs tabs-fixed-width">
          <li class="tab"><a href="#test4">Profesor</a></li>
        <li class="tab"><a class="active" href="#test5">Alumno</a></li>
        <li class="tab"><a href="#test6">Año</a></li>
         </ul>
        </div>
       <div class="card-content grey lighten-4">
        <div id="test4">Gerardo Gonzalez</div>
         <div id="test5">Josué Aquino</div>
         <div id="test6">2020</div>
        </div>
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={logoUnpaz}/>
             </div>
        </div>
        </div>
              </Route>
              

              <Route path="/Principal" exact>
                <Principal />
              </Route>


              <Route path="/agregaTuto" exact>
                <AgregaTuto />
              </Route>

           

            </Switch>
          </div>
        </Router>



             )
  
        }
   
   }



export default App;
