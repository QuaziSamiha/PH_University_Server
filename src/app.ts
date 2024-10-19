import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
// import notFound from './app/middlewares/notFound';
// import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello vutuuuu!');
};
app.get('/', getAController);

//! git push version6 branch
// app.use(globalErrorHandler); //! it is showing an error

// app.use(notFound); //! git push version7 branch
export default app;

// console.log(process.cwd());
