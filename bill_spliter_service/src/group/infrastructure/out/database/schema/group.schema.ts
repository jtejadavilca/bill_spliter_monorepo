import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
//import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'groups', timestamps: true })
export class GroupDocument {
  //id
  @Prop({ type: Types.ObjectId })
  _id: string;

  @Prop()
  userId: string;

  @Prop()
  name: string;

  @Prop()
  numMembers: number;

  @Prop()
  groupType: string;

  @Prop()
  totalAmount: number;
}

export const GroupSchema = SchemaFactory.createForClass(GroupDocument);
