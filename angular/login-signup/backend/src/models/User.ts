import { Schema, model } from 'mongoose';

interface IUser {
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = model<IUser>('User', userSchema);
