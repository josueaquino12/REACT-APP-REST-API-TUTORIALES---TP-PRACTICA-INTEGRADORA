const {pool} = require('../config/configdb');
//const { response } = require('express');

//SE CREAN LOS QUERYS

//------------------------OBTIENE LOS DATOS DE LOS TUTORIALES---------------------
const getTutoriales = async (req, res, next) => {

try {
     const response = await pool.query('SELECT * FROM TUTORIAL');
        res.status(200).json(response.rows);
     } catch (e) {
    res.status(500).json(e);
    next(e);
    }
    }
//----------------------------OBTIENE EL DATO PERO POR ID------------------------
const getTUTORIALByID = async(req, res, next) =>{

    const id = req.params.id;
   
    try {

        const tutorial = await pool.query('SELECT * FROM TUTORIAL WHERE ID = $1',
        [id]);

        
        if (tutorial!==undefined){
           
          res.status(200).json(tutorial.rows);
          console.log(tutorial);
          
        }
       
        else{
          res.status(404).json("Not Found")
        }
   
    } catch (e) {
        res.status(500).json(e);
        next(e);
    }

}

//--------------------------------CREA TUTORIAL-----------------------------
const createTutoriales = async (req, res, next) => {
    
    const {titulo, descripcion, publicado} = req.body;
    try {

        await pool.query('INSERT INTO TUTORIAL (titulo, descripcion, publicado) VALUES ($1, $2, $3)',
       
       [titulo, descripcion, publicado]);
       
       res.status(201).json({ status: 'success', 
                   message: 'TUTORIAL AGREGADO SASTIFACTORIAMENTE',
                   body:{
                   user: {titulo, descripcion, publicado}
                   } 
                })
    
    } catch (e) {
     
        res.status(500).json(e);
     
        next(e);
    }
   
 
  
}

//---------------------------------BORRAR TUTORIAL--------------------------------------
const deleteTutoriales = async(req, res, next) =>{

    const id = req.params.id;
   
    try {

        const removeTutorial = await pool.query('DELETE FROM TUTORIAL WHERE ID = $1',
        [id]);

        
        if (removeTutorial.rowCount === 1){
        res.status(200).json(`Tutorial ${removeTutorial.rowCount} eliminado`);
        }
        
        else{
        res.status(404).json("Not Found");
        }
   
    } catch (e) {
        res.status(500).json(e);
        next(e);
    }

}


//-------------------------------ACTUALIZAR DATOS--------------------------------

const updateTutoriales = async(req, res, next) =>{

const {titulo, descripcion, publicado} = req.body;
const id = req.params.id;
try {

    const updateT = await pool.query('UPDATE TUTORIAL SET titulo = $1, descripcion = $2, publicado = $3 WHERE ID = $4',
   
   [titulo, descripcion, publicado,id]);

   console.log(updateT);
    
   if (updateT.rowCount === 1) { 
   res.status(200).json({ message: "Tutorial actualizado" });
   } else {
   res.status(404).json("404 No encontrado");
   }
   } catch (e) {
 
    res.status(500).json(e);
 
    next(e);
   }
}


//-------------------------------BORRA TODOS DATOS--------------------------------
const deleteAllTutoriales = async(req, res, next) =>{

   
    try {
    
        const deleteAll = await pool.query('DELETE FROM TUTORIAL');
    
       console.log(deleteAll);
        
       if (deleteAll.rowCount !== 0){
       res.status(200).json({
         status: 'success',
         message: "Tutoriales borrados.",
       });
    }
     else {
         res.status(200).json({ message: "No hay tutoriales." });
       }
       } catch (e) {
     
        res.status(500).json(e);
     
        next(e);
       }
    }



module.exports = {getTutoriales, createTutoriales, getTUTORIALByID, deleteTutoriales, updateTutoriales, deleteAllTutoriales}