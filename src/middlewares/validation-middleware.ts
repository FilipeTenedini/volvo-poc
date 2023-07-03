import { AplicationError } from '@/protocols/aplication';
import {
  Request, Response, NextFunction
} from 'express';
import { ObjectSchema } from 'joi';

function paramsValidation<T>(schema: ObjectSchema<T>) {
  return dataValidation(schema, 'params');
}

function queryValidation<T>(schema: ObjectSchema<T>) {
  return dataValidation(schema, 'query');

}

function bodyValidation<T>(schema: ObjectSchema<T>) {
  return dataValidation(schema, 'body');
}

function dataValidation<T>(schema: ObjectSchema<T>, name: string) {
    return (err: AplicationError | Error, req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req[name], { abortEarly: false });

      if (error) return invalidDataError(error.details.map((motive) => motive.message));

      next();
    }
}

export default { paramsValidation, queryValidation, bodyValidation }