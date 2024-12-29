import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'groups', timestamps: true })
export class GroupDocument {
  _id: string;

  @Prop()
  userId: string;

  @Prop({ unique: true })
  code: string;

  @Prop()
  name: string;

  @Prop()
  numMembers: number;

  @Prop()
  groupType: string;

  @Prop()
  totalAmount: number;

  @Prop()
  enabled: boolean = true;

  @Prop()
  createdAt: Date;
}

export const GroupSchema = SchemaFactory.createForClass(GroupDocument);
