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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';
import { Country } from '../models/country.model';

@Controller({ version: '1' })
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('covid/country/:name')
  @ApiParam({
    name: 'name',
    enum: Object.values(CountryEnum),
    description:
      'This is the name of the country you want to get covid-19 information about',
  })
  @ApiResponse({
    status: 200,
    description: 'record found for country',
    type: Country,
  })
  async getSummaryByCountry(@Param('name') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return await this.countryService.getSummaryByCountry(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
