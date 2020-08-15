
import React, {Component} from 'react'
import "materialize-css/dist/css/materialize.min.css"

import M from "materialize-css";
class EditTuto extends Component {




/*constructor (props) {
    super(props)
    this.state = {
     
      titulo: '',
      descripcion: '',
      publicado: '',
      id: ''
    
 
  }
}*/
    
    componentDidMount() {

       
       
        M.Modal.init(this.Modal, this.state);
        this.apiTuto();
       
      }



      



     

   
    

    

}


export default EditTuto;