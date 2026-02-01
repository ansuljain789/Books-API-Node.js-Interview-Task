const Joi = require('joi');

const validateBook = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().max(2000).required(),
        author: Joi.string().required(),
        publishDate: Joi.date().iso()
    });

    return schema.validate(data);
};

module.exports = { validateBook };
