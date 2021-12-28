import * as Joi from 'joi';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { capitalize } from 'src/utils/fuctions/capitalize.function';

export const countryNameValidator = Joi.string()
  .valid(...Object.values(CountryEnum))
  .insensitive()
  .custom((value, helpers) => {
    return capitalize(value);
  })
  .required()
  .messages({
    'any.required': `please provide a valid country name as parameter`,
    //TODO: add message for when value is not one of the valid values
  });
