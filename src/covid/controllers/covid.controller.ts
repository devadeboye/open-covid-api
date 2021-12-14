import { Controller, Get } from '@nestjs/common';
import { CovidService } from '../services/covid.service';

@Controller()
export class CovidController {
  constructor(private readonly covidService: CovidService) {}

  @Get()
  getSummaryByCountry() {
    //
  }

  @Get()
  getStatisticsByState() {
    //
  }

  @Get()
  stateWithHighestMortality() {
    //
  }

  @Get()
  stateWithHighestActiveCases() {
    //
  }

  @Get()
  stateWithHighestConfirmedCases() {
    //
  }
}
