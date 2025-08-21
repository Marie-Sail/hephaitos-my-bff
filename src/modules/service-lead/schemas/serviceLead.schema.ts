import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // ajoute automatiquement createdAt et updatedAt
export class ServiceLead extends Document{
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  titleLead: string;

  @Prop({ required: true })
  titleContactForm: string;

  @Prop({ required: true })
  contentfullId: string;
}

export const ServiceLeadSchema = SchemaFactory.createForClass(ServiceLead);
