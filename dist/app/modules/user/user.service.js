"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
// 18 Oct, 24
// 11-9 Refactor user controller and service
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("./user.model");
const student_model_1 = require("../student/student.model");
// ! come from student service
const createStudentIntoDB = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    //* CREATE A USER OBJECT
    const userData = {};
    //* IF PASSWORD IS NOT GIVEN, THEN USE DEFAULT PASSWORD
    userData.password = password || config_1.default.default_password;
    //* SET STUDENT ROLE
    userData.role = 'student';
    //*  SET MANUALLY GENERATED ID
    userData.id = '2030100001';
    //* CREATE A USER
    const newUser = yield user_model_1.UserModel.create(userData);
    //* CREATE A STUDENT
    if (Object.keys(newUser).length) {
        studentData.id = newUser.id; //? embedding id
        studentData.user = newUser._id; //? reference id
        const newStudent = yield student_model_1.StudentModel.create(studentData);
        return newStudent;
    }
    return newUser;
});
exports.UserServices = {
    createStudentIntoDB,
};
