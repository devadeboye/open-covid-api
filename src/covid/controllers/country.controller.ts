import { Controller, Get, Param } from '@nestjs/common';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { CountryService } from '../services/country.service';

@Controller('covid')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('country/:name')
  getSummaryByCountry(@Param('name') name: CountryEnum) {
    return this.countryService.getSummaryByCountry(name);
  }
}
