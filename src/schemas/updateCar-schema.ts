
import { Car } from '@/protocols/Car';
import Joi from 'joi';

export const updateCar = Joi.object<Car>({
  id: Joi.number().required(),
  model: Joi.string().required(),
  price: Joi.number().strict().integer().required(),
  type: Joi.string().required(),
  image: Joi.string().required(),
});