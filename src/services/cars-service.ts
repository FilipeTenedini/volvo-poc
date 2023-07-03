import { badRequestError } from '@/errors/badRequestError';
import { conflictError } from '@/errors/conflictError';
import { notFoundError } from '@/errors/notFoundError';
import { CreateCar } from '@/protocols/Car';
import carsRepository from '@/repositories/cars-repository'

async function create(carData: CreateCar) {
  const insertedCarQt = await carsRepository.create(carData);
  const minLimit = 1;

  if (insertedCarQt < minLimit) throw conflictError();

  if (!insertedCarQt) throw badRequestError();

  return insertedCarQt;
}
async function show(id: string) {
  const car = await carsRepository.show(id);

  if (!car) {
   throw notFoundError();
  }

  return car;
}

async function index() {
 const carsList = await carsRepository.index();

 if (!carsList) {
  throw notFoundError();
 }

 return carsList;
}

async function destroy(id: string) {
  const item = await show(id);
  const deletedCount = await carsRepository.destroy(id);
  const minLimit = 1;

  if (!item) {
    throw notFoundError();
  }

  if (deletedCount < minLimit) {
   throw badRequestError();
  }

  return deletedCount;
}

export default {
  create, index, show, destroy
}