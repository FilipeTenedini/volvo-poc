import { Router } from 'express';
import carsController from '@/controllers/cars-controller';
import { paramsValidation } from '@/middlewares/validation-middleware';
import { idValidation } from '@/schemas/idValidation-schema';

const carsRouter = Router();

carsRouter
  .post('/:id', carsController.create)
  .get('/:id', paramsValidation(idValidation), carsController.show)
  .get('/', carsController.index)
  .put('/:id', paramsValidation(idValidation), carsController.update)
  .delete('/:id', paramsValidation(idValidation), carsController.destroy);

export default carsRouter;