import * as Joi from 'joi';
import { StateEnum } from 'src/utils/enums/state.enum';
import { capitalize } from 'src/utils/fuctions/capitalize.function';

export const stateNameValidator = Joi.string()
  .valid(...Object.values(StateEnum))
  .insensitive()
  .custom((value, helpers) => {
    return capitalize(value);
  })
  .required()
  .messages({
    'any.required': `please provide a valid state name as parameter`,
    //TODO: add message for when value is not one of the valid values
  });
