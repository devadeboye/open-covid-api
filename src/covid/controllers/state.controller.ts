import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { StateService } from '../services/state.service';
import { countryNameValidator } from '../validators/country.validator';
import { stateNameValidator } from '../validators/state.validator';

@Controller('covid')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get(':country/state/:name')
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

  @Get(':country/state/mortality/highest')
  async stateWithHighestMortality(@Param('country') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return this.stateService.stateWithHighestMortality(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get(':country/state/mortality/lowest')
  async stateWithLowestMortality(@Param('country') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return this.stateService.stateWithLowestMortality(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get(':country/state/active-case/highest')
  async stateWithHighestActiveCases(@Param('country') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return this.stateService.stateWithHighestActiveCases(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get(':country/state/confirmed-case/highest')
  async stateWithHighestConfirmedCases(@Param('country') country: CountryEnum) {
    try {
      country = await countryNameValidator.validateAsync(country);
      return this.stateService.stateWithHighestConfirmedCases(country);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
