import { Request, Response } from 'express';
import carsService from '@/services/cars-service';
import httpStatus from 'http-status';

async function create(req: Request, res: Response) {
  // cria um
}

async function show(req: Request, res: Response) {
  const { id } = req.params;

  const car = await carsService.show(id);

  res.status(httpStatus.OK).send(car);
}

async function index(req: Request, res: Response) {
  const carsList = await carsService.index();

  res.status(httpStatus.OK).send(carsList);
}

async function update(req: Request, res: Response) {
  // faz o update
}

async function destroy(req: Request, res: Response) {
  // deleta especificico
}

export default {
  create, show, index, update, destroy
}