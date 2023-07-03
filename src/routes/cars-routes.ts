import { Router } from 'express';
import carsController from '@/controllers/cars-controller';
import { paramsValidation } from '@/middlewares/validation-middleware';
import { idValidation } from '@/schemas/idValidation-schema';

const carsRouter = Router();

carsRouter
  .post('/', carsController.create)
  .get('/:id', paramsValidation(idValidation), carsController.show)
  .get('/', carsController.index)
  .put('/', carsController.update)
  .delete('/', carsController.destroy);

export default carsRouter;