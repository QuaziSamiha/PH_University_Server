/* eslint-disable @typescript-eslint/no-unused-vars */
// ? 19 Oct, 24
// 11-12 Create not found route & sendResponse utility

import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    error: '',
  });
};

export default notFound;
