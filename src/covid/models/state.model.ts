import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { mongooseSchemaConfig } from 'src/utils/database/schema.config';
import { CountryEnum } from 'src/utils/enums/country.enum';
import { StateEnum } from 'src/utils/enums/state.enum';

@Schema(mongooseSchemaConfig)
export class State extends mongoose.Document {
  @Prop({ enum: Object.values(StateEnum) })
  name: StateEnum;

  @Prop({ enum: Object.values(CountryEnum) })
  country: CountryEnum;

  @Prop()
  confirmedCases: number;

  @Prop()
  casesOnAdmission: number;

  @Prop()
  discharged: number;

  @Prop()
  death: number;
}

export const StateSchema = SchemaFactory.createForClass(State);
