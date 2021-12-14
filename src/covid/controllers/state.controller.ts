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

  @Get('state/highest-mortality')
  stateWithHighestMortality() {
    return this.stateService.stateWithHighestMortality();
  }

  @Get('state/highest-active-case')
  stateWithHighestActiveCases() {
    return this.stateService.stateWithHighestActiveCases();
  }

  @Get('state/highest-confirmed-case')
  stateWithHighestConfirmedCases() {
    return this.stateService.stateWithHighestConfirmedCases();
  }
}
