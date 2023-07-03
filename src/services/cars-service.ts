import { badRequestError } from '@/errors/badRequestError';
import { conflictError } from '@/errors/conflictError';
import { notFoundError } from '@/errors/notFoundError';
import { CreateCar } from '@/protocols/Car';
import carsRepository from '@/repositories/cars-repository'

async function create(carData: CreateCar) {
  const existentCar = await carsRepository.showByDetails(carData.model, carData.type);
  const insertedCar = await carsRepository.create(carData);
  const minLimit = 1;

  if (existentCar) throw conflictError();

  if (insertedCar < minLimit) throw badRequestError();

  return insertedCar;
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
  const deletedCount = await carsRepository.destroy(id);
  const minLimit = 1;
  const item = await show(id);

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