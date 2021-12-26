import { Controller, Get, Param } from '@nestjs/common';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { CountryService } from '../services/country.service';
import { StateService } from '../services/state.service';

@Controller('covid')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get('state/:name')
  getStatisticsByState(@Param('name') name: StateEnum) {
    return this.stateService.getStatisticsByState(name);
  }

  @Get('state/mortality/highest')
  stateWithHighestMortality() {
    return this.stateService.stateWithHighestMortality();
  }

  @Get('state/mortality/lowest')
  stateWithLowestMortality() {
    return this.stateService.stateWithLowestMortality();
  }

  @Get('state/active-case/highest')
  stateWithHighestActiveCases() {
    return this.stateService.stateWithHighestActiveCases();
  }

  @Get('state/confirmed-case/highest')
  stateWithHighestConfirmedCases() {
    return this.stateService.stateWithHighestConfirmedCases();
  }
}
