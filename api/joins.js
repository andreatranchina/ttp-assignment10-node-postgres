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

// /api/joins


//join two tables
router.get('/', async (req, res) =>{
    const {rows} = await pool.query('SELECT employee_names.id, first_name, last_name, salary, yearly_raise FROM employee_names JOIN employee_salaries ON employee_names.id = employee_salaries.employee_id');
    console.log(rows);
    res.json(rows);
});


//join two tables
router.get('/jointwo', async (req, res) =>{
    const {rows} = await pool.query('SELECT employee_names.id, first_name, last_name, salary, yearly_raise FROM employee_names JOIN employee_salaries ON employee_names.id = employee_salaries.employee_id');
    console.log(rows);
    res.json(rows);
});

//join three tables
router.get('/jointhree', async (req, res) =>{
    const {rows} = await pool.query
    ('SELECT employee_names.id, first_name, last_name, salary, yearly_raise, email FROM employee_names JOIN employee_salaries ON employee_names.id = employee_salaries.employee_id JOIN employee_contacts ON employee_names.id = employee_contacts.employee_id');
    console.log(rows);
    res.json(rows);
});

//join all four tables in database
router.get('/joinall', async (req, res) =>{
    const {rows} = await pool.query
    ('SELECT employee_names.id, first_name, last_name, salary, yearly_raise, email, department, full_time, date_hired FROM employee_names JOIN employee_salaries ON employee_names.id = employee_salaries.employee_id JOIN employee_contacts ON employee_names.id = employee_contacts.employee_id JOIN employee_roles ON employee_names.id = employee_roles.employee_id');
    console.log(rows);
    res.json(rows);
});

module.exports = router;
