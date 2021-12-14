import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CovidController } from './controllers/covid.controller';
import { Country, CountrySchema } from './models/country.model';
import { CovidService } from './services/covid.service';

// @Global()
@Module({
  controllers: [CovidController],
  providers: [CovidService],
  exports: [CovidService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Country.name,
        useFactory: () => {
          return CountrySchema;
        },
      },
    ]),
  ],
})
export class CovidModule {}
