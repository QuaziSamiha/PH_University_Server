// 18 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service

import { NextFunction, Request, Response } from 'express';
// import httpStatus from 'http-status';
// import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

// ! moved to user controller
// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const student = req.body;
//     // will call service function to send this data
//     const result = await StudentServices.createStudentIntoDB(student);
//     // will send response
//     res.status(200).json({
//       success: true,
//       message: 'student is created successfully',
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    // sendResponse(res, {
    // statusCode: httpStatus.OK,
    //   statusCode: "ok",
    //   success: true,
    //   message: 'Student is retrieved successfully',
    //   data: result,
    // });
    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    // sendResponse(res, {
    //   statusCode: httpStatus.OK,
    //   success: true,
    //   message: 'Student are retrieved successfully',
    //   data: result,
    // });
    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    // sendResponse(res, {
    //   statusCode: httpStatus.OK,
    //   success: true,
    //   message: 'Student is deleted successfully',
    //   data: result,
    // });
    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  // createStudent //! move to user controller
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
