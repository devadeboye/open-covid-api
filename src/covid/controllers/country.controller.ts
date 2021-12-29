import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { CountryService } from '../services/country.service';
import { countryNameValidator } from '../validators/country.validator';

@Controller({ version: '1' })
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('covid/country/:name')
  async getSummaryByCountry(@Param('name') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return await this.countryService.getSummaryByCountry(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
