// 18 Oct, 24
// 25 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service
// 11-9 Refactor user controller and service
// 12-2 Implement Your Army Middleware

import express from 'express';
import { UserControllers } from './user.controller';
// import { studentValidationSchema } from '../student/student.validation';
import validateRequest from '../../utils/validateRequest';
import { createStudentValidationSchema } from '../student/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  //   validateRequest(studentValidationSchema),
  UserControllers.createStudent,
);

// router.post(
//   '/create-student',
//   validateRequest('validateRequest'),
//   UserControllers.createStudent,
// ); //! NOW WE CAN SEND PARAMETER

// router.post('/create-student', validateRequest, UserControllers.createStudent); //! WE CANNOT SEND PARAMETER

// router.post('/create-student', UserControllers.createStudent); //! come from user route

export const UserRoutes = router;
