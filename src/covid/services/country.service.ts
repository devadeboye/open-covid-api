import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { CountryDto } from '../dtos/country.dto';
import { Country } from '../models/country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private readonly countryModel: Model<Country>,
  ) {}

  getSummaryByCountry(name: CountryEnum) {
    //
  }

  updateInformation(update: CountryDto) {
    const result = this.countryModel.findOneAndUpdate(
      { name: update.name },
      { ...update },
      { new: true, upsert: true },
    );
    return result;
  }
}
