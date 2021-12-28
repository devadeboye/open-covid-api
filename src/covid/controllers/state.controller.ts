import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { GetStatisticsByStateGuard } from '../guards/state.guard';
import { CountryService } from '../services/country.service';
import { StateService } from '../services/state.service';

@Controller('covid')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get(':country/state/:name')
  @UseGuards(GetStatisticsByStateGuard)
  getStatisticsByState(
    @Param('country') country: CountryEnum,
    @Param('name') name: StateEnum,
  ) {
    return this.stateService.getStatisticsByState(country, name);
  }

  @Get(':country/state/mortality/highest')
  stateWithHighestMortality(@Param('country') country: CountryEnum) {
    return this.stateService.stateWithHighestMortality(country);
  }

  @Get(':country/state/mortality/lowest')
  stateWithLowestMortality(@Param('country') country: CountryEnum) {
    return this.stateService.stateWithLowestMortality(country);
  }

  @Get(':country/state/active-case/highest')
  stateWithHighestActiveCases(@Param('country') country: CountryEnum) {
    return this.stateService.stateWithHighestActiveCases(country);
  }

  @Get(':country/state/confirmed-case/highest')
  stateWithHighestConfirmedCases(@Param('country') country: CountryEnum) {
    return this.stateService.stateWithHighestConfirmedCases(country);
  }
}
