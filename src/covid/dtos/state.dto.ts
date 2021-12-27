import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';

export class StateDto {
  state: StateEnum;

  country: CountryEnum;

  confirmedCases: number;

  casesOnAdmission: number;

  discharged: number;

  death: number;
}
