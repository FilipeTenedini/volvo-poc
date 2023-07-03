import { Request, Response } from 'express';
import carsService from '@/services/cars-service';
import httpStatus from 'http-status';
import { Car } from '@/protocols/Car';

async function create(req: Request, res: Response) {
  const { model, price, type, image } = req.body as Car;

  await carsService.create({ model, price, type, image });

  res.sendStatus(httpStatus.OK);
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
  // TODO => vou receber o objeto em req.body; e verificar os existentes, dessa forma passarei para o service e o service e repository;
  // vou passar tanto as colunas como os valores porque vou saber quais colunnas são.
}

async function destroy(req: Request, res: Response) {
  const { id } = req.params;

  await carsService.destroy(id);

  res.sendStatus(httpStatus.OK);
}

export default {
  create, show, index, update, destroy
}