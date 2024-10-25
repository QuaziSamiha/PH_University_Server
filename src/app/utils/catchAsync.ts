// ? 25.10.24
// 12-2 Implement Your Army Middleware

import { NextFunction, Request, RequestHandler, Response } from 'express';

// * IF THERE IS AN ERROR TO THE ASYNCHRONOUS FUNCTION, THEN IT WILL CATCH IT
const catchAsync = (fn: RequestHandler) => {
  //! accepting asynchronous function as parameter - fn
  return (req: Request, res: Response, next: NextFunction) => {
    // ! it will return a promise
    Promise.resolve(fn(req, res, next)) // if resolved
      .catch((err) => next(err)); // if not resolved, and error occur, then go to global error handler
  };
};

export default catchAsync;

// * HIGHER ORDER FUNCTION -- CAN RECEIVE ANOTHER FUNCTION AS PARAMETER AND RETURN A FUNCTION
