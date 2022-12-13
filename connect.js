var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "61582592",
    database: "db_landing",
  });
  

  conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});


app.post("/api/contactanos", (req, res) => {
    console.log('datos : ', req.body);
    let data = {
        nomcon: req.body.nombre,
        gmacon: req.body.email,
        celcon: req.body.celular,
        mencon: req.body.mensaje
    };
    //Insertamos los datos en tabla creada CONTACTANOS
    let sql = "INSERT INTO contactanos SET ?";
    conexion.query(sql, data, function (error, results) {
    if (error) {
        throw error;
    } else {
        console.log(data);
        res.send(data);
    }
    });
  });
