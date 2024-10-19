// 18 Oct, 24
// 11-9 Refactor user controller and service
import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import { StudentModel } from '../student/student.model';

// ! come from student service
const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //* CREATE A USER OBJECT
  const userData: Partial<TUser> = {};

  //* IF PASSWORD IS NOT GIVEN, THEN USE DEFAULT PASSWORD
  userData.password = password || (config.default_password as string);

  //* SET STUDENT ROLE
  userData.role = 'student';

  //*  SET MANUALLY GENERATED ID
  userData.id = '2030100001';

  //* CREATE A USER
  const newUser = await UserModel.create(userData);

  //* CREATE A STUDENT
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id; //? embedding id
    studentData.user = newUser._id; //? reference id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
  return newUser;
};

export const UserServices = {
  createStudentIntoDB,
};
