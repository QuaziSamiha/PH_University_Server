"use strict";
// 18 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service
// 11-9 Refactor user controller and service
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/create-student', user_controller_1.UserControllers.createStudent); //! come from user route
exports.UserRoutes = router;
