import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>({
  id: { type: String },
  // ! 11-10 Create User as Student
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'ID is required'],
    unique: true,
    ref: 'UserModel',
  },
  // password: { type: String, required: true },
  name: userNameSchema,
  gender: ['male', 'female'], // enum
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // enum
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String },
  // ! 11-10 Create User as Student
  // ? now it is available in user model
  // isActive: {
  //   type: String,
  //   enum: {
  //     values: ['active', 'blocked'],
  //     message: '{VALUE} is not a valid status',
  //   },
  //   default: 'active',
  // },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const StudentModel = model<TStudent>('Student', studentSchema);
