import { Router } from 'express';
import carsRouter from '@/routes/cars-routes';

const indexRouter = Router();

indexRouter
  .use('/cars', carsRouter);

  export default indexRouter;