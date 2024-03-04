import mongoose from 'mongoose';

export enum Role {
  Admin = 'admin',
  User = 'user',
}

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  image_url?: string;
  role: Role;
  isBlocked: boolean;
}

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  image_url: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: [true, 'Please provide a email for this user.'],
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.User,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.User ||
  mongoose.model<IUser>('User', UserSchema);
