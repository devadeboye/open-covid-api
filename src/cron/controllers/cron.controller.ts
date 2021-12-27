import { Controller, Get } from '@nestjs/common';
import { CountryService } from 'src/covid/services/country.service';
import { StateService } from 'src/covid/services/state.service';

@Controller('cron')
export class CronController {
  constructor(
    private readonly countryService: CountryService,
    private readonly stateService: StateService,
  ) {}

  @Get('get-data-from-source')
  getDataFromSource() {
    //
  }
}
