import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';
import { Country } from '../models/country.model';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private readonly staffModel: Model<Country>,
  ) {}

  getSummaryByCountry(name: CountryEnum) {
    //
  }
}
