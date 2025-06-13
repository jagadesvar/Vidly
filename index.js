const express = require('express');
const genres = require('./routes/genres.js');
const app = express();
const Joi = require('joi');
app.use(express.json());

app.use('/vidly/genres',genres);


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listning on port ${port}...`));



