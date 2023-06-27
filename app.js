const express = require('express');
const app = express();
const pg = require('pg');

//body parser to help with making post requests on Postman
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use("/api", require("./api"));

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'employees',
    user: 'andreatranchina',
    password: ''
  })

  app.listen(8080, () =>{
    console.log('listening on port 8080');
  })

  module.exports = pool;

