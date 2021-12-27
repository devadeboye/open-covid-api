import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { mongooseSchemaConfig } from 'src/utils/database/schema.config';
import { CountryEnum } from 'src/utils/enums/country.enum';

@Schema(mongooseSchemaConfig)
export class Country extends mongoose.Document {
  @Prop({ enum: Object.values(CountryEnum) })
  name: CountryEnum;

  @Prop()
  totalSampleTested: number;

  @Prop()
  totalConfirmedCases: number;

  @Prop()
  totalActiveCases: number;

  @Prop()
  discharged: number;

  @Prop()
  death: number;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
