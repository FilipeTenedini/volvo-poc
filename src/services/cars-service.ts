import { badRequestError } from '@/errors/badRequestError';
import { notFoundError } from '@/errors/notFoundError';
import carsRepository from '@/repositories/cars-repository'

async function index() {
 const carsList = await carsRepository.index();

 if (!carsList) {
  throw notFoundError();
 }

 return carsList;
}

async function show(id: string) {
  const car = await carsRepository.show(id);

  if (!car) {
   throw notFoundError();
  }

  return car;
}

async function destroy(id: string) {
  const deletedCount = await carsRepository.destroy(id);
  const minimalValue = 1;
  const item = await show(id);

  if (!item) {
    throw notFoundError();
  }

  if (deletedCount < minimalValue) {
   throw badRequestError();
  }

  return deletedCount;
}

export default {
  index, show, destroy
}