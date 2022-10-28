const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
router.use(cors());
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config.db");

const getTasaDolar = (request, response) => {
    connection.query("SELECT ID FROM tasa_dolar", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};

//ruta
app.route("/tasadolar")
.get(getTasaDolar);


module.exports = app;
