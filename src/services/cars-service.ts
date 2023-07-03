import { badRequestError } from '@/errors/badRequestError';
import { conflictError } from '@/errors/conflictError';
import { notFoundError } from '@/errors/notFoundError';
import { Car, CreateCar } from '@/protocols/Car';
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

async function update(carData: Car) {
  await show(carData.id);
  
  const existentCar = await carsRepository.showByDetails(carData.model, carData.type);

  if (existentCar) throw conflictError();

  const updatedCarsId: string = await carsRepository.update(carData);

  if (!updatedCarsId) throw badRequestError();

  return updatedCarsId;
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
  create, show, index, update, destroy
}