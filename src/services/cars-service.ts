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

export default {
  index, show
}