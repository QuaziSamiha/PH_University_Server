// 18 Oct, 24
//  11-7 Create user interface ,model and validation

export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
  //? createdAt --> this field of schema will be automatic created by mongodb
  //? updatedAt --> this field of schema will be automatic created by mongodb
};

//! 11-9 Refactor user controller and service
// export type TNewUser = {
//   password: string;
//   role: string;
//   id: string;
// };

//! 11-10 Create User as Student
// instead of creating TNewUser we can reuse TUser
