// 5 Nov, 24
// 12-5 Create Academic Semester Model

import { z } from 'zod';

const createAcademicSemesterValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .max(20, { message: 'Password cannot be more than 20 character' })
    .optional(),
});

export const AcademicSemesterValidations = {
  createAcademicSemesterValidationSchema,
};
