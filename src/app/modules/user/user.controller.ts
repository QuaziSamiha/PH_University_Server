// 11-8 Refactor user validation , student route ,controller and service
// 18 Oct, 24
import { Request, Response } from 'express';
import { UserServices } from './user.service';

// ! moved to user controller
const createStudent = async (req: Request, res: Response) => {
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
