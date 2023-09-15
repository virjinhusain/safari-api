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
  contactPerson: any[];
  @Prop()
  email: any[];
  @Prop()
  phoneNumber: any[];
  @Prop()
  show: any[];
  @Prop()
  website: any[];
  @Prop()
  link: any[];
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
  @Prop()
  actionShowResult: string;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
