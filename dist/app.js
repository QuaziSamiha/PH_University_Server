"use strict";
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./app/modules/student/student.route");
const user_route_1 = require("./app/modules/user/user.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/students', student_route_1.StudentRoutes);
app.use('/api/v1/users', user_route_1.UserRoutes);
const getAController = (req, res) => {
    res.send('Hello vutuuuu!');
};
app.get('/', getAController);
app.use((err, req, res, next) => {
    let statusCode = 500;
    let message = err.message || 'Something went wrong!';
    return res.status(statusCode).json({
        success: false,
        message: message,
        error: err,
    });
});
exports.default = app;
// console.log(process.cwd());
