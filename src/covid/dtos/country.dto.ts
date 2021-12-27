import { CountryEnum } from 'src/utils/enums/country.enum';

export class CountryDto {
  name: CountryEnum;

  totalSampleTested: number;

  totalConfirmedCases: number;

  totalActiveCases: number;

  discharged: number;

  death: number;
}
