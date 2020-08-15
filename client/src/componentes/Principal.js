
import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../App.css';

//componentes
//import InputTuto from './componentes/inputTuto';
import ListarTuto from './ListarTuto';

class Principal extends Component{


    state = {

        tutoriales: [],
        tutorialesFiltro: [],
        //idTuto: []
    
      };
    
      componentDidMount(){
        this.apiTuto()
      }
    
      apiTuto = async () => {
    
        try {
            const datos = await fetch("http://localhost:3001/api/tutoriales", {method: 'GET'});
            const tutoriales = await datos.json();
            //console.log(tutoriales);
            this.setState({tutoriales: tutoriales, tutorialesFiltro:tutoriales})
            
        } catch (error) {

            alert(error);
            
        }
      
      }
    
    
    
      render(){
       
        const{tutorialesFiltro} = this.state;


       
    
            return(
               
           
               <div className="App fondoContainer">
      
                   <div className="container fondoContainer">
    
                  <ListarTuto listaComponentes={tutorialesFiltro} table={"Lista de Tutoriales" }/>
    
              </div>
    
            </div>
            )
                    
            }







}

export default Principal;