const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number()
        .min(2)
        .max(4)
        .required(),
    name: Joi.string()
        .required(),
    mobile: Joi.string()
        .length(9)
        .required(),
    age: Joi.number()
        .min(18)
        .max(100)
        .required()
    ,
    year: Joi.number()
        .integer()
        .min(1920)
        .max(2022)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    address: Joi.string()
})

module.defaults = schema;



