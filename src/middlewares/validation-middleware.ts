import {
  Request, Response, NextFunction
} from 'express';
import { invalidDataError } from '@/errors/invalidDataError';
import { ObjectSchema } from 'joi';

export function paramsValidation<T>(schema: ObjectSchema<T>) {
  return dataValidation(schema, 'params');
}

export function queryValidation<T>(schema: ObjectSchema<T>) {
  return dataValidation(schema, 'query');

}

export function bodyValidation<T>(schema: ObjectSchema<T>) {
  return dataValidation(schema, 'body');
}

export function dataValidation<T>(schema: ObjectSchema<T>, name: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[name], { abortEarly: false });

    if (error) throw invalidDataError(error.details.map((motive) => motive.message));

    next();
  }
}

export default { paramsValidation, queryValidation, bodyValidation }