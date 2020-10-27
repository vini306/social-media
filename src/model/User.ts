import {
  Schema, Document, model, Model,
} from 'mongoose';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

interface IUser {
  name: String,
  email: String,
  password: String
}

export interface IUserDocument extends IUser, Document{
}

export interface IUserModel extends Model<IUserDocument>{

}
export default model<IUserDocument, IUserModel>('User', UserSchema);
