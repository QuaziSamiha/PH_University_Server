//? 18 Oct, 24
//? 19 Oct, 24
//? 20 Oct, 24
// 12-1 Avoid Repetition of Try-Catch , use catchAsync

// import { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express'; //! 12-1 Avoid Repetition of Try-Catch , use catchAsync
import { StudentServices } from './student.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSingleStudent: RequestHandler = async (req, res, next) => {
  // const getSingleStudent = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
    // } catch (err: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // ! 11-11 Fix bugs and setup basic global error handler
    res.status(200).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
    // next(err); //! globalErrorHandler
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    console.log('Students are not retrieved, there is something wrong');
    // next(err); //! globalErrorHandler
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteStudent: RequestHandler = async (req, res, next) => {
  // const deleteStudent = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction, //! globalErrorHandler
  // ) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    console.log('there is an error to delete student');
    // next(err); //! globalErrorHandler
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
