// 18 Oct, 24
// 25 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service
// 11-9 Refactor user controller and service
// 12-2 Implement Your Army Middleware

import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidationSchema } from '../student/student.validation';

const router = express.Router();

// ! WITH ERROR HANDLING
const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // ! VALIDATION
      // if everything all right nex() --> controller
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (error) {
      next(error);
    }
  };
};

// ! WITHOUT ERROR HANDLING
// const validateRequest = (schema: AnyZodObject) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     // ! VALIDATION
//     // if everything all right nex() --> controller
//     await schema.parseAsync({
//       body: req.body,
//     });
//     next();
//   };
// };

//! CONVERTING TO HIGHER ORDER FUNCTION
// const validateRequest = (name: string) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     console.log(`I am an army and my name is ${name}`);
//   };
// };

// ! NORMAL FUNCTION
// const validateRequest = (req: Request, res: Response, next: NextFunction) => {
//   console.log('I am an army');
//   console.log('REQUEST: ', req.body);
//   next(); // REQUEST GO TO CONTROLLER
// };

router.post(
  '/create-student',
  validateRequest(studentValidationSchema),
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
