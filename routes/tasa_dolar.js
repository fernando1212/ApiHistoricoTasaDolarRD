const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config.db");

const gettasa_dolar = (request, response) => {
    connection.query("SELECT * FROM tasa_dolar", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};

//ruta
app.route("/tasa_dolar")
.get(gettasa_dolar);


module.exports = app;