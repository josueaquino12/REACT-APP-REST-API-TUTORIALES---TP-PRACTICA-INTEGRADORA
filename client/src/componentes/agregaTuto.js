import React, {Component} from 'react';

//import InputTuto from './componentes/inputTuto';


class AgregaTuto extends Component{


   constructor (props) {
        super(props)
        this.state = {
         
          data:{
          titulo: '',
          descripcion: '',
          publicado: false
        },
        
        reset:{
          titulo: '',
          descripcion: '',
          publicado: false
        }
     
      }
    }


      handleChange = (e) => {
        this.setState({  data: {
          ...this.state.data,
          [e.target.name]: e.target.value,
        }, })
      }
      
 handleSubmit = async (e) => {
     e.preventDefault()

     try {

    const body = this.state.data;
     await fetch("http://localhost:3001/api/tutoriales", 
    {method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
    }  
    );
    // const values = JSON.stringify(this.state)
    //console.log(response)
    
    this.setState({data: this.state.reset})

    alert("Tutorial agregado: "+ body.titulo)

       
     } catch (error) {

      alert(error)
       
     }
    
      }
 
    

render(){

    //const {titulo,descripcion} =this.state
    return(

          <div className="container">
              <form className="col s12" onSubmit={this.handleSubmit} >   
                 <div className="row card-panel">

                   <div className ="input-field col s6">
                   <label htmlFor="titulo">Tutorial</label>
                   <input type="text" 
                    placeholder="Ingrese Titulo" 
                    id="titulo"
                    name="titulo"
                    value={this.state.data.titulo}
                    onChange={this.handleChange}
                    //className="validate" 
                    required
                    /> 
                    </div>
                   
                 <div className ="input-field col s6">
                 <label htmlFor="descripcion">Tutorial</label>
                   <input type="text" 
                    placeholder="Ingrese descripcion" 
                    id="descripcion" 
                    name="descripcion"
                    value={this.state.data.descripcion}
                    //class="validate" 
                    onChange={this.handleChange}
                    required
                    /> 
                    </div>
                
                
                <div className="section">
                    <button className="btn-large red btn-success" type="submit">
                        Agregar</button>
                    </div>
                   </div>
                 </form>              
          {/*<h2>Values of the form</h2>
            <p>{JSON.stringify(this.state)}</p>*/}
          </div>

    )

}








}

export default AgregaTuto;