"use strict";
// 18 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
const student_service_1 = require("./student.service");
const getSingleStudent = (req, res, 
// ? 11-11 Fix bugs and setup basic global error handler
next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Student is retrieved successfully',
            data: result,
        });
        // } catch (err: any) {
    }
    catch (err) {
        // ! 11-11 Fix bugs and setup basic global error handler
        // res.status(200).json({
        //   success: false,
        //   message: err.message || 'something went wrong',
        //   error: err,
        // });
        next(err); //! globalErrorHandler
    }
});
const getAllStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Students are retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err); //! globalErrorHandler
    }
});
const deleteStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.deleteStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Student is deleted successfully',
            data: result,
        });
    }
    catch (err) {
        next(err); //! globalErrorHandler
    }
});
exports.StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteStudent,
};
