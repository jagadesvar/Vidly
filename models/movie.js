const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const {genreSchema} = require('./genre');

const movieSchema = new mongoose.Schema({

    title: {type: String, required: true, trim: true, minlength: 5, maxlength:255},
    genre: {type: genreSchema, required: true},
    numberInStock: {type: Number, required: true, min:0, max:255},
    dailyRentalRate: {type: Number, required: true, min:0, max:255}
});

const Movie = mongoose.model('Movie', movieSchema);

function validateMovies(movies){

    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required() 
    });

    return schema.validate(movies);
}

exports.Movie = Movie;
exports.validate = validateMovies;
