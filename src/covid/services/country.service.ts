import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getSummaryByCountry(name: CountryEnum) {
    const result = await this.countryModel
      .findOne({ name })
      .select(['-createdAt', '-_id']);
    if (!result) {
      throw new NotFoundException('Covid 19 Information for Country not found');
    }
    return result;
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
