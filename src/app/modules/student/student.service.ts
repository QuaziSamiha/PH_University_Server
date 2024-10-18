// 18 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service

import { StudentModel } from './student.model';

// ! move to user service
// const createStudentIntoDB = async (student: Student) => {
//   const result = await StudentModel.create(student); // create() mongoose function
//   return result; // this result will send to controller
// };

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.aggregate([{ $match: { id } }]);
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
