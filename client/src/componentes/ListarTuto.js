import React, { Component } from 'react';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

//import EditTuto from './editTuto';
class ListarTuto extends Component {


  state = {

    tutoriales: [],
    tutorialesSearch: [],
    modalActualizar: false,
    data : { 
    titulo: "",
    descripcion: "",
    publicado : false
  }, 
  busqueda: ''
  
  }

//tomar los valores de la caja de busqueda 
  onChange= async e=>{

    e.persist();
    await this.setState({busqueda: e.target.value})
    //console.log(this.state.busqueda);
    this.filtrar();
    
   }

   //filtrar los resultados de busquedas
   filtrar=()=>{
    var search = this.state.tutoriales.filter(item=>{
      if(item.titulo.toLowerCase().includes(this.state.busqueda) ||
        item.descripcion.toLowerCase().includes(this.state.busqueda)){
        return item;
      }
    });
    this.setState({tutorialesSearch: search});
  }

  //inicia los JS de materialize
  componentDidMount() {
    M.AutoInit();
    this.apiTuto();
  }

  //obtiene los datos de los tutoriales 
  apiTuto = async () => {

    try {
        const datos = await fetch("http://localhost:3001/api/tutoriales", {method: 'GET'});
        const tutoriales = await datos.json();
        //console.log(tutoriales);
        this.setState({tutoriales: tutoriales})
        
    } catch (error) {

        alert(error);
        
    }

    this.setState({tutorialesSearch: this.state.tutoriales})
  
  }

  //cambiar bandera boolean para mostrar el modal
  mostrarModalActualizar = (dato) => {
    this.setState({
      data: dato,
      modalActualizar: true,
    });
  };

//cambiar bandera boolean para cerrar el modal
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  // tomar las letras ingresadas para obtener esos valores
  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (

      <div>

        {/*----------------------ROWS-----------------*/}

        <div className="row">

          <div className="col s12">
            <h1>Lista de Tutoriales</h1>

          <form>
           <div class="input-field">
            <input id="search" type="search"
            placeholder="Buscar"
            className="textField" 
            name="busqueda"
            value={this.state.busqueda}
            onChange={this.onChange}
            required/>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
            </div>
            </form>
            <table class="highlight striped blue">
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
                {

                this.state.tutorialesSearch.map(

                  e => (
                    <tr key={e.id}>
                      <td >{e.titulo} </td>
                      <td >{e.descripcion} </td>
                      <td >{e.publicado ? <p>Publicado</p> : <p> Pendiente</p>} </td>
                      
                      <td> <a class="btn waves-light blue modal-trigger" href="#act" 
                      onClick={()=>this.mostrarModalActualizar(e)}>Actualizar</a></td>
                     
                      <td> <a class="btn waves-light red" 
                      onClick={()=>this.borrar(e)}>Eliminar</a></td>
                    </tr>
                  )
                )
                }


      {/**MODAL EDITAR */}
              <div id="act" 
                ref={Modal => {
                this.Modal = Modal;
             }} 
              className="modal"
              isOpen={this.state.modalActualizar}>
              <div class="modal-content">
             <h4>Editar Tutorial</h4>
             <p>Edite los siguientes tutoriales</p>

             <div class="row">
             <form class="col s12">
             
             <div class="input-field col s6">

             <input
                placeholder="Placeholder"
                className="form-control"
                name="titulo"
                type="text"
                onChange={this.handleChange}
                value={this.state.data.titulo}
              />
              <label> Titulo:</label>

              </div>

             <div class="input-field col s6">
             <input placeholder="Placeholder"  name="descripcion" 
              type="text" class="validate"
              onChange={this.handleChange}
             value={this.state.data.descripcion}/>
             <label for="first_name">Descripcion</label>
              </div>
          
             <div class="input-field col s6">
              {
              this.state.data.publicado ? 
              <p>
              <label>
              <input name="group1" type="radio" />
              <span>Publicado</span>
              </label>
               </p>
               :
              <p>
             <label>
             <input name="group1" type="radio" />
             <span>Pendiente</span>
             </label>
             </p>
             }
          </div>
         </form>
        </div>
       </div>
       <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat"
      type="submit" onClick={() => this.editar(this.state.data)}>Editar</a>
        <a href="#!" class="modal-close waves-effect waves-red btn-flat"
      type="submit" onClick={() => this.cerrarModalActualizar()}>Cerrar</a>
      </div>
       </div>    
      </tbody>
     </table>
   </div>
   {/**CIERRE DEL ROW */}
   </div>
        </div>
      /**CIERRE DEL DIV PADRE */
    )

  }


  //Funcion Borrar Tutorial
  borrar = async (e) => {

    var mensaje = window.confirm("¿Desea eliminar este item " + e.titulo + " ?");

    if (mensaje) {
        await fetch(`http://localhost:3001/api/tutoriales/${e.id}`, {
        method: "DELETE"
      })

      var contador = 0;
      var arreglo = this.state.tutoriales;
      arreglo.map((registro) => {
        if (e.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });

      alert("Tutorial eliminado: " + e.titulo);

     }
    else {
      alert("¡Haz denegado el mensaje!");
    }

  }

   //Funcion Editar Tutorial
    editar = async (dato) => {

    var mensaje = window.confirm("¿Desea actualizar este item " + dato.titulo + " ?");

     if (mensaje) {

      await fetch(`http://localhost:3001/api/tutoriales/${dato.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
          body: JSON.stringify(
           { titulo: dato.titulo,
            descripcion: dato.descripcion,
            publicado:dato.publicado}
          )
        }
      );

      var contador = 0;
      var arreglo =  this.state.tutoriales;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo[contador].titulo = dato.titulo;
          arreglo[contador].descripcion = dato.descripcion;
          arreglo[contador].publicado = dato.publicado;
        }
        contador++;
      });
      this.setState({ tutoriales: arreglo, modalActualizar: false });
      alert("Tutorial actualizado" + dato.titulo)
    }
    //Detectamos si el usuario NO ingreso un valor
    else {
      alert("Error");
    }

  }









}







export default ListarTuto