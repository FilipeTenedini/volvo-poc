import { CarID } from '@/protocols/Car';
import Joi, { CustomHelpers } from 'joi';


export const idValidation = Joi.object<CarID>({
  id: Joi.string().custom(sanitizeParam, 'custom validation').required(),
  // id: Joi.string().required(),
});

function sanitizeParam(value: string, helpers: CustomHelpers) {
  const isNumber = /^[1-9][0-9]*$/;
  console.log('sanitizou')
  if (!isNumber.test(value)) {
    return helpers.error('invalid id');
  }
  return value;
}