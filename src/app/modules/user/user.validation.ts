// 18 Oct, 24
// 11-7 Create user interface ,model and validation
// 11-8 Refactor user validation , student route ,controller and service

import { z } from 'zod';

const userValidationSchema = z.object({
  //   id: z.string(), //! we are not sending id from client
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(), //! it is made optional
  //   needsPasswordChange: z.boolean().optional().default(true), //! also setting it from model (mongoose validation)
  //   role: z.enum(['student', 'faculty', 'admin']), //! it is setting from API endpoints
  //   status: z.enum(['in-progress', 'blocked']).default('in-progress'), //! by default it is set 'in-progress'
  //   isDeleted: z.boolean().optional().default(false), //! by default it is set to false
});

export const userValidations = {
  userValidationSchema,
};
