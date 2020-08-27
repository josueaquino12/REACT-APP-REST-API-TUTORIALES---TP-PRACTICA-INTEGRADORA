import React, { Component } from 'react';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

//import EditTuto from './editTuto';
class ListarTuto extends Component {


 
  //inicia los JS de materialize
  componentDidMount() {
    M.AutoInit();
  }

 

  render() {

    const { listaComponentes, table } = this.props;

    //obtine los datos de las materias realizando un mapeo
    const datosComponentes = listaComponentes.map(

      e => (
        <tr key={e.id}>
          <td >{e.titulo} </td>
          <td >{e.descripcion} </td>
          <td >{e.publicado ? <p>Publicado</p> : <p> Pendiente</p>} </td>
          <td> <button class="btn waves-effect waves-light blue" href="#act">Actualizar</button></td>
          <td> <button class="btn waves-effect waves-light red" onClick={()=>this.borrar(e.id)}>Eliminar</button></td>
          <td> </td>
        </tr>
      )
    )


    return (

      <div>

        {/*----------------------ROWS-----------------*/}

        <div className="row">

          <div className="col s12">
            <table class="highlight">
              <caption className="captionStyle">{table}</caption>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Descripcion</th>
                  <th>Estado</th>
                  <th>Actualizar</th>
                  <th>Eliminar</th>
                </tr>
               
              </thead>
              {/*------Se pasa en el tbody los titulos de los tutoriales----*/}
              <tbody>
                {datosComponentes}
              
              </tbody>
            </table>
          </div>

          
          {/**CIERRE DEL ROW */}
        </div>
 

        <div id="act" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>



      </div>
      /**CIERRE DEL DIV PADRE */

    )

  }


  borrar = async (id) => {


    var mensaje = window.confirm("¿Desea actualizar este item " + id + " ?");

    if (mensaje) {
      const borrado = await fetch(`http://localhost:3001/api/tutoriales/${id}`, {
        method: "DELETE"
      })

      alert("ITEM ELIMINADO" + borrado.titulo)

    }

    else {
      alert("¡Haz denegado el mensaje!");
    }


  }



  actualizar = async (id) => {


    var mensaje = window.confirm("¿Desea eliminar este item " + id + " ?");



    if (mensaje != null) {




      const response = await fetch(`http://localhost:3001/api/tutoriales/${id}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mensaje)
        }
      );
      // const values = JSON.stringify(this.state)
      //console.log(response)
      alert("Tutorial actualizado" + response)
    }
    //Detectamos si el usuario NO ingreso un valor
    else {
      alert("Error");
    }

  }









}







export default ListarTuto