const express = require('express');
const router = express.Router();
const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'employees',
    user: 'andreatranchina',
    password: ''
  });

// /api/names

//get entire table
router.get('/', async (req, res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM employee_names');
        console.log(rows);
        res.json(rows);
    }
    catch(error){
        console.log(error);
    }
})

//get individual record
router.get('/:id', async (req, res) =>{
    try{
        const {id} = req.params;
        const {rows} = await pool.query('SELECT * FROM employee_names WHERE id = $1', [id]);
        console.log(rows);
        res.json(rows);
    }
    catch(error){
        console.log(error);
    }
})

//create new record
router.post('/', async(req, res) =>{
    try{
        const {first_name, last_name, dob} = req.body;
        const {rows} = await pool.query('INSERT INTO employee_names (first_name, last_name, dob) VALUES ($1, $2, $3) RETURNING *'
                                        , [first_name, last_name, dob]);
        console.log(rows);                             
        res.json(rows);   
    }
    catch(error){
        console.log(error);
    }
                             
})

//delete a record
router.delete('/:id', async(req,res) =>{
    try{
        const {id} = req.params;
        const {rows} = await pool.query('DELETE FROM employee_names WHERE id = $1', [id]);
        res.json(rows);
    }
    catch(error){
        console.log(error);
    }

})

module.exports = router;