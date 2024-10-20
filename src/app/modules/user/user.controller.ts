/* eslint-disable @typescript-eslint/no-unused-vars */
//? 18 Oct, 24
//? 19 Oct, 24
//? 20 Oct, 24
// 12-1 Avoid Repetition of Try-Catch , use catchAsync
import { RequestHandler } from 'express';
// import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent: RequestHandler = async (req, res, next) => {
  // const createStudent = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodParsedData =
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createStudent,
};
