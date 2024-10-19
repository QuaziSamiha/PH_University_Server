//?  18 Oct, 24
//?  19 Oct, 24

// 11-11 Fix bugs and setup basic global error handler
import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: { type: String, required: true, select: 0 },
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

//! 11-11 Fix bugs and setup basic global error handler

// * PRE SAVE MIDDLEWARE / HOOK: WILL WORK ON CREATE() SAVE()
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  //* HASHING PASSWORD AND SAVE INTO DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//* set '' after saving password
//* POST SAVE MIDDLEWARE / HOOK
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<TUser>('User', userSchema);
