// 18 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service

import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

const getSingleStudent = async (
  req: Request,
  res: Response,
  // ? 11-11 Fix bugs and setup basic global error handler
  next: NextFunction, //! globalErrorHandler
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
    // } catch (err: any) {
  } catch (err) {
    // ! 11-11 Fix bugs and setup basic global error handler
    // res.status(200).json({
    //   success: false,
    //   message: err.message || 'something went wrong',
    //   error: err,
    // });
    next(err); //! globalErrorHandler
  }
};

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction, //! globalErrorHandler
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err); //! globalErrorHandler
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction, //! globalErrorHandler
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err); //! globalErrorHandler
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
