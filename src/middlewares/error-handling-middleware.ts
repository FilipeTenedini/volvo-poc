import { AplicationError } from '@/protocols/Aplication';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

const errorsTable = {
  'BadRequest': httpStatus.BAD_REQUEST,
  'NotFoundError': httpStatus.NOT_FOUND,
  'ConflictError': httpStatus.CONFLICT,
  'InvalidDataError': httpStatus.UNPROCESSABLE_ENTITY,
  'NoContentError': httpStatus.NO_CONTENT,
}

function errorHandler(err: AplicationError | Error, req: Request, res: Response, next: NextFunction) {
  const status: number = errorsTable[err.name] || 500;
  const message: string = status === 500 ? 'Sorry, unexpected error.' : err.message;
  console.log({ devError: err.message });

  return res.status(status).send(message);
}

export default errorHandler;