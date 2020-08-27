import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

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

            
            <nav>
     
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
              <h1 class="tituloTable">BIENVENIDOS A API TUTORIALES</h1>
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
