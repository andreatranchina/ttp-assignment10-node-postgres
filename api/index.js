const express = require('express');
const router = express.Router();


//routes
router.use('/names', require('./names'));
router.use('/salaries', require('./salaries'));
router.use('/roles', require('./roles'));
router.use('/contacts', require('./contacts'));
router.use('/joins', require('./joins'));

module.exports = router;