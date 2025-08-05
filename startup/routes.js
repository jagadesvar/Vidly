const express = require('express');
const genres = require('../routes/genres.js');
const customers = require('../routes/customers.js');
const movies = require('../routes/movies.js');
const rentals = require('../routes/rentals.js');
const users = require('../routes/users.js');
const auth = require('../routes/auth.js');
const error = require('../middleware/error.js');

module.exports = function(app){
    app.use(express.json());
    app.use('/vidly/genres',genres);
    app.use('/vidly/customers',customers);
    app.use('/vidly/movies',movies);
    app.use('/vidly/rentals',rentals);
    app.use('/vidly/users', users);
    app.use('/vidly/auth', auth);
    app.use(error);
}