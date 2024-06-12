const express = require('express');
const router = express.Router();


// Here the list of controllers

const users = require('./users');
const carshops = require('./carshops');


// Here the list of path

router.use('/users',users);
router.use('/carshops',carshops);

module.exports = router;