
import React, {Component} from 'react';

import '../App.css';

//componentes
//import InputTuto from './componentes/inputTuto';
import ListarTuto from './ListarTuto';

class Principal extends Component{

      
      render(){
       
        /*const{tutorialesFiltro} = this.state;*/

            return(
                        
               <div className="App fondoContainer">
      
                   <div className="container fondoContainer">
    
                  <ListarTuto />
    
              </div>
    
            </div>
           
           )
        
        }
    }

export default Principal;