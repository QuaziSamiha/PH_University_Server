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
