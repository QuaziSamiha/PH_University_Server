//  18 Oct, 24
// 11-7 Create user interface ,model and validation
// 11-8 Refactor user validation , student route ,controller and service

import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, default: true }, //! default value set within server
    role: { type: String, enum: ['student', 'faculty', 'admin'] },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress', //! by default set
    },
    isDeleted: { type: Boolean, default: false }, //! default value set within server
  },
  { timestamps: true },
);

export const UserModel = model<TUser>('User', userSchema);
