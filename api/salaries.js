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

// /api/salaries

//get entire table
router.get('/', async (req, res) =>{
    const {rows} = await pool.query('SELECT * FROM employee_salaries');
    console.log(rows);
    res.json(rows);
});


//get individual record
router.get('/:id', async (req, res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM employee_salaries WHERE id = $1', [req.params.id]);
        console.log(rows);
        res.json(rows);
    }
    catch(error){
        console.log(error);
    }
});


//create a new record
router.post('/', async(req, res) =>{
    try{
        const {salary, yearly_raise, employee_id} = req.body;
        const {rows} = await pool.query('INSERT INTO employee_salaries (salary, yearly_raise, employee_id) VALUES ($1, $2, $3) RETURNING *'
                                        , [salary, yearly_raise, employee_id]);
        console.log(rows);                             
        res.json(rows);   
    }
    catch(error){
        console.log(error);
    }
                             
})

//update entire record
router.put('/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const {salary, yearly_raise, employee_id} = req.body;
        const {rows} = await pool.query(
            'UPDATE employee_salaries SET salary = $1, yearly_raise = $2, employee_id = $3 WHERE id = $4 RETURNING *'
            , [salary, yearly_raise, employee_id, id]);
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
        const {rows} = await pool.query('DELETE FROM employee_salaries WHERE id = $1 RETURNING *', [id]);
        res.json(rows);
    }
    catch(error){
        console.log(error);
    }

})


module.exports = router;