import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryController } from './controllers/country.controller';
import { StateController } from './controllers/state.controller';
import { Country, CountrySchema } from './models/country.model';
import { State, StateSchema } from './models/state.model';
import { CountryService } from './services/country.service';
import { StateService } from './services/state.service';

@Global()
@Module({
  controllers: [CountryController, StateController],
  providers: [CountryService, StateService],
  exports: [CountryService, StateService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Country.name,
        useFactory: () => {
          return CountrySchema;
        },
      },
    ]),
    MongooseModule.forFeatureAsync([
      {
        name: State.name,
        useFactory: () => {
          return StateSchema;
        },
      },
    ]),
  ],
})
export class CovidModule {}
