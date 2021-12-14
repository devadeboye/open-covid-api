import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { Country } from '../models/country.model';
import { State } from '../models/state.model';

@Injectable()
export class StateService {
  constructor(
    @InjectModel(State.name) private readonly staffModel: Model<State>,
  ) {}

  getStatisticsByState(name: StateEnum) {
    //
  }

  stateWithHighestMortality() {
    //
  }

  stateWithHighestActiveCases() {
    //
  }

  stateWithHighestConfirmedCases() {
    //
  }
}
