const express = require("express");
const app = express();
const bodyparser = require( 'body-parser');
const cors = require("cors");


const PORT = process.env.PORT || 3001;

//middleware
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());

//rutas  
app.use(require('./routes/router'));


app.listen(PORT, () => {
    console.log(`El servidor ha comenzado en el puerto ${PORT}`);
});