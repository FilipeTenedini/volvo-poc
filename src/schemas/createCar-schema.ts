import { CreateCar } from '@/protocols/Car';
import Joi from 'joi';

export const createCar = Joi.object<CreateCar>({
  model: Joi.string().required(),
  price: Joi.number().required(),
  type: Joi.string().required(),
  image: Joi.string().required(),
})

