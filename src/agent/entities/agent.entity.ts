import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AgentDocument = HydratedDocument<Agent>;

@Schema({ timestamps: true })
export class Agent {
  @Prop({ required: true })
  tagRegion: string;
  @Prop({ required: true })
  travelAgent: string;
  @Prop()
  contactPerson: string;
  @Prop()
  email: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  show: string;
  @Prop()
  website: string;
  @Prop()
  link: string;
  @Prop()
  publishedResort: string;
  @Prop()
  salesBySafari: string;
  @Prop()
  safariProduct: string;
  @Prop()
  sales2022: string;
  @Prop()
  sales2023: string;
  @Prop()
  notes: string;
  @Prop()
  followUp: string;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
