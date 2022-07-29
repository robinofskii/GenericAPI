const Joi = require("Joi");

/**
 * It takes in a data object, and returns a validation object.
 * @param data - The data to be validated.
 * @returns The return value is an object with two properties:
 * error: If validation fails, this property will contain an object with details about the validation
 * failure.
 * value: If validation succeeds, this property will contain the value that was validated.
 */
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

/**
 * It takes in a data object, and returns a validation object.
 * @param data - The data to be validated.
 * @returns The return value is an object with two properties:
 * error: null if validation passes, otherwise it contains an object with details about the validation
 * failure.
 * value: the value that was passed to validate.
 */
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
