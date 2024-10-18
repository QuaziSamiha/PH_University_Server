// 18 Oct, 24
// 11-8 Refactor user validation , student route ,controller and service
// 11-9 Refactor user controller and service

import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-student', UserControllers.createStudent); //! come from user route

export const UserRoutes = router;
