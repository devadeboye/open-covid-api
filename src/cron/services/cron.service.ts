import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios, { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';
import { envConfiguration } from 'src/utils/config/env.configuration';
import { covidData } from 'data';
import { CountryService } from 'src/covid/services/country.service';
import { CountryDto } from 'src/covid/dtos/country.dto';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateService } from 'src/covid/services/state.service';
import { StateDto } from 'src/covid/dtos/state.dto';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor(
    // private readonly configService: ConfigService,
    private countryService: CountryService,
    private stateService: StateService,
  ) {}

  async getDataFromSource() {
    // const covidSourceData = await axios.get(
    //   this.configService.get(envConfiguration.DATA_SOURCE),
    // );

    this.logger.debug('data has been has been fetched from source');
    return covidData;
  }

  // @Cron(CronExpression.EVERY_8_HOURS)
  @Cron(CronExpression.EVERY_4_HOURS)
  async updateStoredData() {
    const result = await this.getDataFromSource();
    const { states, ...nationalStatistics } = result.data;
    const nigerianStatistics = nationalStatistics as unknown as CountryDto;
    nigerianStatistics.name = CountryEnum.Nigeria;
    const stateStatistics = states.map((state) => {
      delete state?._id;
      state['country'] = CountryEnum.Nigeria;
      return state as unknown as StateDto;
    });
    await this.countryService.updateInformation(nigerianStatistics);
    await this.stateService.updateInformation(stateStatistics);
    this.logger.debug('data has been saved to db');
  }
}
