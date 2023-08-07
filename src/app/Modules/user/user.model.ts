import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    role: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    number: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>('Users', userSchema);
