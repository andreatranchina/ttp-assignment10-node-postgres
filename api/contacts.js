const express = require('express');
const router = express.Router();

const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'employees',
    user: 'andreatranchina',
    password: ''
  })


// /api/contacts

//get entire table
  router.get('/', async (req, res) =>{
    const {rows} = await pool.query('SELECT * FROM employee_contacts');
    console.log(rows);
    res.json(rows);
})


//get individual record
router.get('/:id', async (req, res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM employee_contacts WHERE id = $1', [req.params.id]);
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
        const {phone, email, employee_id} = req.body;
        const {rows} = await pool.query('INSERT INTO employee_contacts (phone, email, employee_id) VALUES ($1, $2, $3) RETURNING *'
                                        , [phone, email, employee_id]);
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
        const {rows} = await pool.query('DELETE FROM employee_contacts WHERE id = $1', [id]);
        res.json(rows);
    }
    catch(error){
        console.log(error);
    }

})

module.exports = router;