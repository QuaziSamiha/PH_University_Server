// 18 Oct, 24
// 11-7 Create user interface ,model and validation
// 11-8 Refactor user validation , student route ,controller and service

import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(),
});

export const userValidations = {
  userValidationSchema,
};
