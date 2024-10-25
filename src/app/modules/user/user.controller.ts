//? 18 Oct, 24
//? 19 Oct, 24
//? 20 Oct, 24
//? 25 Oct, 24
// 12-1 Avoid Repetition of Try-Catch , use catchAsync
// 12-2 Implement Your Army Middleware

import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  // ZOD VALIDATION HAVE TO USE HERE //! 12-2 : we will use zod to our middleware
  const result = await UserServices.createStudentIntoDB(password, studentData);

  res.status(200).json({
    success: true,
    message: 'student is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
