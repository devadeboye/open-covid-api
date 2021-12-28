import * as Joi from 'joi';
import { StateEnum } from 'src/utils/enums/state.enum';

export const stateNameValidator = Joi.string()
  .valid(...Object.values(StateEnum))
  .insensitive()
  .required()
  .messages({
    'any.required': `please provide a valid state name as parameter`,
  });
