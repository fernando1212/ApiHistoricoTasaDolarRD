const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
router.use(cors());
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config.db");

const gettasa_dolar = (request, response) => {
    connection.query("SELECT ID FROM tasa_dolar limit 10", 
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};

//ruta
app.route("/tasadolar")
.get(gettasa_dolar);


module.exports = app;
