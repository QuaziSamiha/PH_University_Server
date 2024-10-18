import { StudentModel } from './student.model';

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

// import { StudentModel } from './student.model';
// import { Student } from './student.interface'; // type definition

// const createStudentIntoDB = async (student: Student) => {
//   const result = await StudentModel.create(student); // create() mongoose function
//   return result; // this result will send to controller
// };

// export const StudentServices = {
//   createStudentIntoDB,
// };
