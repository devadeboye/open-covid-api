import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { CountryService } from '../services/country.service';

@Controller('covid')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('country/:name')
  async getSummaryByCountry(@Param('name') name: CountryEnum) {
    const result = await this.countryService.getSummaryByCountry(name);
    if (!result) {
      throw new NotFoundException('Covid 19 Information for Country not found');
    }
    return result;
  }
}
