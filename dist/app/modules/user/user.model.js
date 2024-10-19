"use strict";
//?  18 Oct, 24
//?  19 Oct, 24
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
exports.UserModel = void 0;
// 11-11 Fix bugs and setup basic global error handler
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    password: { type: String, required: true, select: 0 },
    needsPasswordChange: { type: Boolean, default: true }, //! default value set within server
    role: { type: String, enum: ['student', 'faculty', 'admin'] },
    status: {
        type: String,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress', //! by default set
    },
    isDeleted: { type: Boolean, default: false }, //! default value set within server
}, { timestamps: true });
//! 11-11 Fix bugs and setup basic global error handler
// * PRE SAVE MIDDLEWARE / HOOK: WILL WORK ON CREATE() SAVE()
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const user = this; // doc
        //* HASHING PASSWORD AND SAVE INTO DB
        user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bcrypt_salt_rounds));
        next();
    });
});
//* set '' after saving password
//* POST SAVE MIDDLEWARE / HOOK
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
