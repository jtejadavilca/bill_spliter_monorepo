import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'users', timestamps: true })
export class UserDocument {
  _id: string;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop({ default: true })
  enabled: boolean;

  @Prop()
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
