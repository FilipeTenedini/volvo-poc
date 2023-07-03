import { Router } from 'express';
import carsController from '@/controllers/cars-controller';
import { bodyValidation, paramsValidation } from '@/middlewares/validation-middleware';
import { idValidation } from '@/schemas/idValidation-schema';
import { createCar } from '@/schemas/createCar-schema';
import { updateCar } from '@/schemas/updateCar-schema';

const carsRouter = Router();

carsRouter
  .post('/', bodyValidation(createCar), carsController.create)
  .get('/:id', paramsValidation(idValidation), carsController.show)
  .get('/', carsController.index)
  .put('/', bodyValidation(updateCar), carsController.update)
  .delete('/:id', paramsValidation(idValidation), carsController.destroy);

export default carsRouter;