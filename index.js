const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres.js');
const app = express();
app.use(express.json());

app.use('/vidly/genres',genres);

mongoose.connect('mongodb://localhost/vidly')
.then(()=> console.log('Mongodb is connected...'))
.catch((err)=> console.log('faild to connect Mongodb...'));

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listning on port ${port}...`));



