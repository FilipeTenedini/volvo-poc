import { Router } from 'express';
import carsController from '@/controllers/cars-controller';

const carsRouter = Router();

carsRouter
  .post('/', carsController.create)
  .get('/:id', carsController.show)
  .get('/', carsController.index)
  .put('/', carsController.update)
  .delete('/', carsController.destroy);

export default carsRouter;