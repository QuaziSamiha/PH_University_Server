//? 18 Oct, 24
//? 19 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service
import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

// ! come from student controller
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction, //! 11-11 Fix bugs and setup basic global error handler
) => {
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
    // console.log(error); //! 11-11 Fix bugs and setup basic global error handler
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
