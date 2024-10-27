import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

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

export default validateRequest;
