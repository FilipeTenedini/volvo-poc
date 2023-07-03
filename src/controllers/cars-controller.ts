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
  const { id, model, price, type, image } = req.body as Car;

  const updateCarValue: Car = { id, model, price, type, image };

  const resultId = await carsService.update(updateCarValue);
  
  res.status(httpStatus.OK).send(`Item with id ${resultId} successfully changed`);
}

async function destroy(req: Request, res: Response) {
  const { id } = req.params;

  await carsService.destroy(id);

  res.sendStatus(httpStatus.OK);
}

export default {
  create, show, index, update, destroy
}