import { Router } from 'express';
import carsController from '@/controllers/cars-controller';
import { bodyValidation, paramsValidation } from '@/middlewares/validation-middleware';
import { idValidation } from '@/schemas/idValidation-schema';
import { createCar } from '@/schemas/createCar-schema';

const carsRouter = Router();

carsRouter
  .post('/:id', bodyValidation(createCar), carsController.create)
  .get('/:id', paramsValidation(idValidation), carsController.show)
  .get('/', carsController.index)
  .put('/:id', paramsValidation(idValidation), carsController.update)
  .delete('/:id', paramsValidation(idValidation), carsController.destroy);

export default carsRouter;