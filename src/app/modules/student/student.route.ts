import express from 'express';
import { StudentContollers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentContollers.createStudent);

export const StudentRoutes = router;
