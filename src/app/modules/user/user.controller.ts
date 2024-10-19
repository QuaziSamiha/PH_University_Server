//? 18 Oct, 24
//? 19 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service
import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

// ! come from student controller
const createStudent = async (
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction, //! 11-11 Fix bugs and setup basic global error handler
) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodParsedData =
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    // ! 11-12 Create not found route & sendResponse utility
    // res.status(200).json({
    //   success: true,
    //   message: 'student is created successfully',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    //next(error);//! 11-11 Fix bugs and setup basic global error handler
  }
};

export const UserControllers = {
  createStudent,
};
