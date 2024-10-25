//? 18 Oct, 24
//? 19 Oct, 24
//? 20 Oct, 24
// 12-1 Avoid Repetition of Try-Catch , use catchAsync

import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';

// * HIGHER ORDER FUNCTION -- CAN RECEIVE ANOTHER FUNCTION AS PARAMETER
// * IF THERE IS AN ERROR TO THE ASYNCHRONOUS FUNCTION, THEN IT WILL CATCH IT
const catchAsync = (fn: RequestHandler) => {
  //! accepting asynchronous function as parameter
  // ! calling the asynchronous function here, it will return a promise
  //  Promise.resolve(fn(req, res, next)).catch(err => next(err));
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)) // if resolved
      .catch((err) => next(err)); // if not resolved, and error occur, then go to global error handler
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Student is retrieved successfully',
    data: result,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    message: 'Students are retrieved successfully',
    data: result,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteStudent = catchAsync(async (req, res, next) => {
  // const deleteStudent: RequestHandler = catchAsync(async (req, res, next) => {
  // ? no longer need try catch block
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
