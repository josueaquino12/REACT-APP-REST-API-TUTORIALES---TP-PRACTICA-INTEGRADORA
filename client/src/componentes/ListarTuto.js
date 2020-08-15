import React, {Component} from 'react';

import "materialize-css/dist/css/materialize.min.css"


//import EditTuto from './editTuto';
class ListarTuto extends Component {

state = {

  id: 0,
  estado: false

}


mostrarDatos = (id) => {
      
  const getId = id
  this.setState({id:getId, estado: true})

  
  }


  render(){  
    
    const {listaComponentes, table} = this.props;
    
    const datosComponentes = listaComponentes.map(
            
      e=>(
               <tr key={e.id}>      
                    <td onClick={() => this.mostrarDatos(e.id)}>{e.titulo} </td>
                    
                 </tr>
            )
      )

      var tutorialesArray = {titulo: "", descripcion: "", publicado: ""}
     
    
     listaComponentes.find(e =>{
      if(e.id === (this.state.id))
      tutorialesArray.titulo = e.titulo
     })

     listaComponentes.find(e =>{
      if(e.id === (this.state.id))
      tutorialesArray.descripcion = e.descripcion
     })

     listaComponentes.find(e =>{
      if(e.id === (this.state.id))
      tutorialesArray.descripcion = e.descripcion
     })

     console.log(tutorialesArray)
     
  
    return(
     
      <div> 

      <form className="col s12" >   
          <div class="row card-panel">
            <label for="titulo">Tutorial</label>
            <input type="text" 
             placeholder="Ingrese un Tutorial a buscar" 
             id="titulo" 
             //class="validate" 
             required
             /> 

             <div className="section">


             <button class="btn-large red btn-success" type="submit">
                 <i class="material-icons left">search</i>Buscar</button>
             </div>
            
           </div>
          </form>
 
 
 
 
  <div className="row">


   <div className="col s6"> 
      <table class="highlight">
      <caption  className="captionStyle">{table}</caption>
         <thead>
           <tr>
               <th>Titulo</th>
               
           </tr>
         </thead>
     <tbody>
         {datosComponentes}
    </tbody>
       </table>

       </div>

   {this.state.estado ? (
   <div className="col s6"> 
       
       <div class="card blue-grey darken-1">
        <div class="card-content white-text">
         
          <span class="card-title">Detalles</span>
          <p>Titulo: {tutorialesArray.titulo}</p>
          <p>Descripcion: {tutorialesArray.descripcion}</p>
          <p>Estado: {tutorialesArray.publicado ? <p>Publicado</p> : <p> Pendiente</p>}</p>
          <p>ID: {this.state.id}</p>

           {/*<EditTuto listaComponentes={listaComponentes}>*/}

           

           <button className="btn" onClick={()=>this.borrar(this.state.id)}>Borrar</button>
           <button className="btn red" onClick={()=>this.actualizar(tutorialesArray.titulo,tutorialesArray.descripcion, this.state.id)}>Actualizar</button>
       
          
        </div>
       
      </div>
       

     </div>) : (
       <h1>Haga Click en cualquier Tutorial</h1>
     )}
      
   </div>

 </div>

     )

  }


    borrar = async (id) =>  {
      
    
      var mensaje =  window.confirm("¿Desea eliminar este item "+id+ " ?");
      
         if (mensaje) {
         const borrado = await fetch (`http://localhost:3001/api/tutoriales/${id}`, {
         method: "DELETE"
         })
  
          alert("ITEM ELIMINADO"+ borrado.titulo)
  
          //this.setState({ })
  
         }
     
         else {
         alert("¡Haz denegado el mensaje!");
         }
  
      
      }



      actualizar = async (titulo,descripcion,id) =>  {
    
    
     var update = prompt(titulo," ");
     var update2 = prompt(descripcion," ");
     

    if (update != null && update2 != null ){
     
     
    const upd = {update,update2}
    
    const response = await fetch(`http://localhost:3001/api/tutoriales/${id}`, 
    {method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(upd)
    }  
    );
    // const values = JSON.stringify(this.state)
    //console.log(response)
    alert("Tutorial agregado"+ response)
       }
        //Detectamos si el usuario NO ingreso un valor
     else {
          alert("Error");
        }
        
        }









}







export default ListarTuto