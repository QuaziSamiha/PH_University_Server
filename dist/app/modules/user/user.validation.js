"use strict";
// 18 Oct, 24
// 11-7 Create user interface ,model and validation
// 11-8 Refactor user validation , student route ,controller and service
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidations = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    password: zod_1.z
        .string({
        invalid_type_error: 'Password must be string',
    })
        .max(20, { message: 'Password can not be more than 20 characters' })
        .optional(),
});
exports.userValidations = {
    userValidationSchema,
};
