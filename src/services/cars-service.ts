import { notFoundError } from "@/errors/notFoundError";
import carsRepository from "@/repositories/cars-repository"

async function index() {
 const carsList = await carsRepository.index();

 if (!carsList) {
  throw notFoundError();
 }

 return carsList;
}

export default { index }