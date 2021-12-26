import * as Joi from 'joi';

// define validation for all env variables
export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .trim()
    .valid('development', 'production', 'staging')
    .required(),
  CONNECTION_STRING: Joi.string().trim().required(),
  PORT: Joi.number().default(4005),
  DATA_SOURCE: Joi.string().trim().required(),
});
