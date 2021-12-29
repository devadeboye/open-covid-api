import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Version,
} from '@nestjs/common';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { StateService } from '../services/state.service';
import { countryNameValidator } from '../validators/country.validator';
import { stateNameValidator } from '../validators/state.validator';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { State } from '../models/state.model';

@Controller({ version: '1' })
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get('covid/:country/state/:name')
  @ApiParam({
    name: 'country',
    enum: Object.values(CountryEnum),
    description:
      'This is the name of the country you want to get covid-19 information about',
  })
  @ApiParam({
    name: 'name',
    enum: Object.values(StateEnum),
    description:
      'This is the name of the state you want to get covid-19 information about',
  })
  @ApiResponse({
    status: 200,
    description: 'record found for state',
    type: State,
  })
  @ApiBadRequestResponse({
    description:
      'Country or state name supplied does not exist or is not supported',
  })
  async getStatisticsByState(
    @Param('country') country: CountryEnum,
    @Param('name') name: StateEnum,
  ) {
    try {
      const state = await stateNameValidator.validateAsync(name);
      country = await countryNameValidator.validateAsync(country);
      return this.stateService.getStatisticsByState(country, state);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('covid/:country/state/mortality/highest')
  @ApiParam({
    name: 'country',
    enum: Object.values(CountryEnum),
    description:
      'This is the name of the country you want to get covid-19 information about',
  })
  @ApiResponse({
    status: 200,
    description: 'record found',
    type: State,
  })
  @ApiBadRequestResponse({
    description: 'Country name supplied does not exist or is not supported',
  })
  async stateWithHighestMortality(@Param('country') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return this.stateService.stateWithHighestMortality(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('covid/:country/state/mortality/lowest')
  @ApiParam({
    name: 'country',
    enum: Object.values(CountryEnum),
    description:
      'This is the name of the country you want to get covid-19 information about',
  })
  @ApiResponse({
    status: 200,
    description: 'record found',
    type: State,
  })
  @ApiBadRequestResponse({
    description: 'Country name supplied does not exist or is not supported',
  })
  async stateWithLowestMortality(@Param('country') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return this.stateService.stateWithLowestMortality(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('covid/:country/state/active-case/highest')
  @ApiParam({
    name: 'country',
    enum: Object.values(CountryEnum),
    description:
      'This is the name of the country you want to get covid-19 information about',
  })
  @ApiResponse({
    status: 200,
    description: 'record found',
    type: State,
  })
  @ApiBadRequestResponse({
    description: 'Country name supplied does not exist or is not supported',
  })
  async stateWithHighestActiveCases(@Param('country') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return this.stateService.stateWithHighestActiveCases(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('covid/:country/state/confirmed-case/highest')
  @ApiParam({
    name: 'country',
    enum: Object.values(CountryEnum),
    description:
      'This is the name of the country you want to get covid-19 information about',
  })
  @ApiResponse({
    status: 200,
    description: 'record found',
    type: State,
  })
  @ApiBadRequestResponse({
    description: 'Country name supplied does not exist or is not supported',
  })
  async stateWithHighestConfirmedCases(@Param('country') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return this.stateService.stateWithHighestConfirmedCases(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
