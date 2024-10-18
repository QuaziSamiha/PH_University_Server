import { TUser } from './user.interface';
// 18 Oct, 24
// 11-9 Refactor user controller and service
import config from '../../config';
import { TStudent } from '../student/student.interface';
// import { TNewUser } from './user.interface';
import { UserModel } from './user.model';
import { StudentModel } from '../student/student.model';

// ! come from student service
const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //* CREATE A USER OBJECT
  // ! 11-10 Create User as Student
  const userData: Partial<TUser> = {};
  //! 11-9 Refactor user controller and service
  // const userData: TNewUser = {};

  //* IF PASSWORD IS NOT GIVEN, THEN USE DEFAULT PASSWORD
  userData.password = password || (config.default_password as string);
  //   if (!password) {
  //     userData.password = config.default_password as string;
  //   } else {
  //     userData.password = password;
  //   }

  //* SET STUDENT ROLE
  userData.role = 'student';

  //*  SET MANUALLY GENERATED ID
  userData.id = '2030100001';

  //* CREATE A USER
  const newUser = await UserModel.create(userData);
  //   const result = await UserModel.create(studentData);

  //* CREATE A STUDENT
  //! 11-10 Create User as Student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id; //? embedding id
    studentData.user = newUser._id; //? reference id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
  return newUser;

  //   if (Object.keys(result).length) {
  //     studentData.id = result.id; //? embedding id
  //     studentData.user = result._id; //? reference id
  //   }
  //   return result;
};

export const UserServices = {
  createStudentIntoDB,
};
