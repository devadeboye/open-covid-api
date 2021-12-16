import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { StateDto } from '../dtos/state.dto';
import { Country } from '../models/country.model';
import { State } from '../models/state.model';

@Injectable()
export class StateService {
  constructor(
    @InjectModel(State.name) private readonly stateModel: Model<State>,
  ) {}

  async updateInformation(update: StateDto[]) {
    // const result = this.stateModel.findOneAndUpdate(
    //   { name: update.name },
    //   { ...update },
    //   { new: true, upsert: true },
    // );
    const result = await this.stateModel.updateMany()
    return result;
  }

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
