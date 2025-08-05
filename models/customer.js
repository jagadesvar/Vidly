const Joi = require('joi');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    isGold: {type: Boolean, default: false},
    name:{ type: String, required: true},
    phone:{type: Number, required: true}
});

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomers(customers){

    const schema = Joi.object({
        isGold:Joi.boolean().required(),
        name:Joi.string().min(3).required(),
        phone: Joi.number().min(1000000000).max(9999999999).required()
    })

    return schema.validate(customers);
}

module.exports = {
  Customer,
  validate: validateCustomers
};