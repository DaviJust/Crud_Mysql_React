const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudgames",
}) 

app.get('/',(req,res) => {
    let SQL = "INSERT INTO games ( name, cost, category) VALUES ( 'Far cry 5', '120', 'aventura' )";
    db.query(SQL, (err, result) => {
        console.log(err);
    })
})

app.listen(3001, () =>{
console.log("rodando servidor");
});

// app.get, app.post, app.delete, app.put

