import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { countryNameValidator } from '../validators/country.validator';
import { stateNameValidator } from '../validators/state.validator';

@Injectable()
export class GetStatisticsByStateGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest();
    const { country, name } = request.params;
    try {
      await stateNameValidator.validateAsync(name);
      await countryNameValidator.validateAsync(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
    return true;
  }
}
