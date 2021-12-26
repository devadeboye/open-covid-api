import { Injectable, NotFoundException } from '@nestjs/common';
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

  async updateInformation(updates: StateDto[]) {
    updates.forEach(async (update) => {
      await this.stateModel.findOneAndUpdate(
        { state: update.state },
        { ...update },
        { new: true, upsert: true },
      );
    });
  }

  async getStatisticsByState(state: StateEnum) {
    const result = await this.stateModel
      .findOne({ state })
      .select(['-createdAt', '-_id']);
    if (!result) {
      throw new NotFoundException('covid 19 information for state not found');
    }
    return result;
  }

  async stateWithHighestMortality() {
    const highest = await this.stateModel.find().sort({ death: -1 }).limit(1);
    if (!highest) {
      throw new NotFoundException(
        'covid 19 information for hightest mortality not found',
      );
    }
    return highest;
  }

  async stateWithLowestMortality() {
    const lowest = await this.stateModel
      .find()
      .sort({ death: +1 })
      .limit(1);
    if (!lowest) {
      throw new NotFoundException(
        'covid 19 information for lowest mortality not found',
      );
    }
    return lowest;
  }

  async stateWithHighestActiveCases() {
    const highest = await this.stateModel
      .find()
      .sort({ casesOnAdmission: -1 })
      .limit(1);
    if (!highest) {
      throw new NotFoundException(
        'covid 19 information for hightest active cases not found',
      );
    }
    return highest;
  }

  async stateWithHighestConfirmedCases() {
    const highest = await this.stateModel
      .find()
      .sort({ confirmedCases: -1 })
      .limit(1);
    if (!highest) {
      throw new NotFoundException(
        'covid 19 information for hightest confirmed cases not found',
      );
    }
    return highest;
  }
}
